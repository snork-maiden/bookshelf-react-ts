import bookStore from "@/stores/bookStore";
import BookCard from "./bookCard/bookCard";
import styles from "./booksList.module.css";
import searchParamsStore from "@/stores/searchParamsStore";
import { searchGoogleBooks } from "@/utils/googleBooks";

export default function BooksList() {
  const ifLoadMore = bookStore.booksAmount || 0 > bookStore.booksList.length;
  async function handleChange() {
    searchParamsStore.increasePageNumber();
    let data = await searchGoogleBooks(searchParamsStore.searchParams);
    bookStore.addBooks(data);
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
