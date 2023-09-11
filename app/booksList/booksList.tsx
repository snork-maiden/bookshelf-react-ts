import bookStore from "@/stores/bookStore";
import BookCard from "./bookCard/bookCard";
import styles from "./booksList.module.css";
import searchParamsStore from "@/stores/searchParamsStore";
import { searchGoogleBooks } from "@/utils/googleBooks";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import GoogleApiError from "@/app/googleApiError/googleApiError";

export default observer(function BooksList() {
  const [error, setError] = useState<boolean>(false);
  const ifLoadMore = bookStore.booksAmount || 0 > bookStore.booksList.length;
  async function handleChange() {
    setError(false);
    searchParamsStore.increasePageNumber();
    try {
      let data = await searchGoogleBooks(searchParamsStore.searchParams);
      bookStore.addBooks(data);
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      {bookStore.books?.items && (
        <ul className={styles.booksList}>
          {bookStore.books.items.map((book, index) => (
            <li key={index} className={styles.bookItem}>
              <BookCard bookData={book} />
            </li>
          ))}
        </ul>
      )}
      {ifLoadMore && (
        <button onClick={handleChange} className={styles.button}>
          Load more
        </button>
      )}
      {error && <GoogleApiError />}
    </>
  );
});
