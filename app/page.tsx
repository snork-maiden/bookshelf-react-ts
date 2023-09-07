"use client";
import styles from "./page.module.css";
import Header from "./header/header";
import BookCard from "./bookCard/bookCard";
import bookStore from "@/stores/bookStore";
import { observer } from "mobx-react-lite";

const Home = observer(function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h2 className="visually-hidden">Search results</h2>
        <p className="search-results">
          Found {bookStore.booksAmount} results
        </p>
        <ul className="books-list">
          <li className="books-item">
            <BookCard />
          </li>
        </ul>
      </main>
    </>
  );
});
export default Home;
