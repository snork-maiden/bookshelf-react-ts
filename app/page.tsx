"use client";
import styles from "./page.module.css";
import bookStore from "@/stores/bookStore";
import BooksList from "./booksList/booksList";
import { observer } from "mobx-react-lite";

const Home = observer(function Home() {
  console.log(bookStore.booksAmount);
  return (
    <>
      {/* <Header></Header>
      <main className={styles.main}> */}
        <h2 className={styles.visuallyHidden}>Search results</h2>
        {bookStore.booksAmount !== null && (
          <p className={styles.searchResults}>
            Found {bookStore.booksAmount} results
          </p>
        )}
        {(bookStore.booksAmount ?? 0) > 0 && <BooksList />}
      {/* </main> */}
    </>
  );
});
export default Home;
