import { fetchGoogleBooks } from "@/utils/googleBooks";
import Filters from "./filters/filters";
import styles from "./header.module.css";
import { useState } from "react";
import bookStore from "@/stores/bookStore";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = await fetchGoogleBooks(searchTerm);
    console.log(data)
    bookStore.setBooks(data);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Search for books in Google Books</h1>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className={styles.search}
          value={searchTerm}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <Filters />
    </header>
  );
}
