import bookStore from "@/stores/bookStore";
import BookCard from "./bookCard/bookCard";
import styles from "./booksList.module.css";

export default function BooksList() {
  const ifLoadMore = bookStore.booksAmount||0 > bookStore.booksList.length;
  return (
    <>
      <ul className={styles.booksList}>
        {bookStore.booksList.map((book, index) => (
          <li key={index} className={styles.bookItem}>
            <BookCard bookData={book} />
          </li>
        ))}
      </ul>
      {ifLoadMore && (
        <button>Load more</button>
      )}
    </>
  );
}
