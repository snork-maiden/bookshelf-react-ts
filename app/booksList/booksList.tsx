import bookStore from "@/stores/bookStore";
import BookCard from "./bookCard/bookCard";
import styles from "./booksList.module.css";
import searchParamsStore from "@/stores/searchParamsStore";

export default function BooksList() {
  const ifLoadMore = bookStore.booksAmount || 0 > bookStore.booksList.length;
  function handleChange() {
    searchParamsStore.increasePageNumber();
  }
  return (
    <>
      <ul className={styles.booksList}>
        {bookStore.booksList.map((book, index) => (
          <li key={index} className={styles.bookItem}>
            <BookCard bookData={book} />
          </li>
        ))}
      </ul>
      {ifLoadMore && <button onClick={handleChange}>Load more</button>}
    </>
  );
}
