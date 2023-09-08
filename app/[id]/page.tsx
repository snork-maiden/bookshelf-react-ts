"use client";
import { fetchGoogleBooksById } from "@/utils/googleBooks";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { BookData } from "@/utils/googleBooks/interfaces";

export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<BookData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedBook = await fetchGoogleBooksById(params.id);
      setBook(fetchedBook);
    }

    fetchData();
  }, [params.id]);
  const findImageURL =
    book?.volumeInfo?.imageLinks?.small ||
    book?.volumeInfo?.imageLinks?.thumbnail ||
    book?.volumeInfo?.imageLinks?.smallThumbnail;
  return (
    <article className={styles.book}>
      {/* {findImageURL && (
        <img
          src={findImageURL}
          alt={book.volumeInfo.title}
          className={styles.cover}
        />
      )}
      {book.volumeInfo.categories?.length > 0 && (
        <p className={styles.category}>
          {book.volumeInfo.categories.join(", ")}
        </p>
      )}
      <h3 className={styles.title}>{book.volumeInfo.title}</h3>
      {book.volumeInfo?.authors?.length > 0 && (
        <p className={styles.author}>{book.volumeInfo.authors.join(", ")}</p>
      )} */}
    </article>
  );
}
