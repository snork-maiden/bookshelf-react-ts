"use client";
import { fetchGoogleBooksById } from "@/utils/googleBooks";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { BookData } from "@/utils/googleBooks/interfaces";
import Loading from "../loading";
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";
import { Playfair_Display } from "next/font/google";
import GoogleApiError from "@/app/googleApiError/googleApiError";
const playfairDisplay = Playfair_Display({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
});
export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<BookData | null>(null);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function fetchData() {
      setError(false);

      try {
        const fetchedBook = await fetchGoogleBooksById(params.id);
        setBook(fetchedBook);
      } catch (err) {
        setError(true);
      }
    }

    fetchData();
  }, [params.id]);
  function findImageURL(book: BookData) {
    return (
      book.volumeInfo?.imageLinks?.thumbnail ||
      book.volumeInfo?.imageLinks?.smallThumbnail
    );
  }
  function clearDescription(dirtyDescription: string | undefined): any {
    let regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/g;
    if (!dirtyDescription?.match(regexForHTML)) {
      return <p>{dirtyDescription}</p>;
    }
    return parse(sanitizeHtml(dirtyDescription));
  }

  return (
    <>
      {error && <GoogleApiError />}
      {book && (
        <article className={styles.book}>
          {book.volumeInfo.categories?.length > 0 && (
            <div className={styles.categories}>
              {book.volumeInfo.categories.map((category, index) => (
                <span className={styles.category} key={index}>
                  {category}
                </span>
              ))}
            </div>
          )}
          {findImageURL(book) && (
            <img
              src={findImageURL(book)}
              alt={book.volumeInfo.title}
              className={styles.cover}
            />
          )}
          <h2 className={styles.title + " " + playfairDisplay.className}>
            {book.volumeInfo.title}
          </h2>
          {(book.volumeInfo.authors?.length || 0) > 0 && (
            <p className={styles.author}>
              {book.volumeInfo.authors.join(", ")}
            </p>
          )}
          <div className={styles.description}>
            {clearDescription(book.volumeInfo.description)}
          </div>
        </article>
      )}
      {!book && !error && <Loading></Loading>}
    </>
  );
}
