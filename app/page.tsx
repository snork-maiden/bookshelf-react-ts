"use client";
import styles from "./page.module.css";
import Header from "./header/header";
import BookCard from "./bookCard/bookCard";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h2 className="visually-hidden">Search results</h2>
        <p className="search-results">Found number results</p>
        <ul className="books-list">
          <li className="books-item">
            <BookCard />
          </li>
        </ul>
      </main>
    </>
  );
}
