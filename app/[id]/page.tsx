"use client";
import { fetchGoogleBooksById } from "@/utils/googleBooks";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { BookData } from "@/utils/googleBooks/interfaces";
import Loading from "../loading";
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<BookData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedBook = await fetchGoogleBooksById(params.id);
      setBook(fetchedBook);
    }

    fetchData();
  }, [params.id]);
  function findImageURL(book: BookData) {
    return (
      // book.volumeInfo?.imageLinks?.large ||
      // book.volumeInfo?.imageLinks?.medium ||
      // book.volumeInfo?.imageLinks?.small ||
      book.volumeInfo?.imageLinks?.thumbnail ||
      book.volumeInfo?.imageLinks?.smallThumbnail
    );
  }
  function clearDescription(dirtyDescription: string | undefined): any {
    let regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/g;
    if (!dirtyDescription?.match(regexForHTML)) {
      return <p className={styles.author}>{dirtyDescription}</p>;
    }
    return parse(sanitizeHtml(dirtyDescription));
  }

  return (
    <>
      {book && (
        <article className={styles.book}>
          {findImageURL(book) && (
            <img
              src={findImageURL(book)}
              alt={book.volumeInfo.title}
              className={styles.cover}
            />
          )}
          {book.volumeInfo.categories?.length > 0 && (
            <p className={styles.category}>
              {book.volumeInfo.categories.join(", ")}
            </p>
          )}
          <h2 className={styles.title}>{book.volumeInfo.title}</h2>
          {(book.volumeInfo.authors?.length || 0) > 0 && (
            <p className={styles.author}>
              {book.volumeInfo.authors.join(", ")}
            </p>
          )}
          {clearDescription(book.volumeInfo.description)}
        </article>
      )}
      {!book && <Loading></Loading>}
    </>
  );
}
