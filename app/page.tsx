import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h2 className="visually-hidden">Search results</h2>
        <p className="search-results">Found number results</p>
        <ul className="books-list">
          <li className="books-item">
            <a href="" className="books-link">
              <article className="book">
                <Image src="" alt="" className="cover" />
                <p className="category"></p>
                <h3 className="title"></h3>
                <p className="author"></p>
              </article>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
