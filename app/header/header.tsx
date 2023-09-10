import { searchGoogleBooks } from "@/utils/googleBooks";
import Filters from "./filters/filters";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import bookStore from "@/stores/bookStore";
import {
  Categories,
  OrderByOptions,
  SearchParams,
} from "@/utils/googleBooks/interfaces";
import searchParamsStore from "@/stores/searchParamsStore";

export interface FilterState {
  category: Categories;
  orderBy: OrderByOptions;
}

export default function Header() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    category: "all",
    orderBy: "relevance",
    searchString: "",
    page: 0,
  });
  useEffect(() => {
    async function searchBooks(): Promise<void> {
      if (!searchParams.searchString) return;
      let data = await searchGoogleBooks(searchParams);
      bookStore.setBooks(data);
      searchParamsStore.setParams(searchParams);
    }
    searchBooks();
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...searchParams, ...{ searchString: e.target.value } });
  };

  const handleFiltersChange = (filters: any) => {
    setSearchParams({ ...searchParams, ...filters });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          value={searchParams.searchString}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <Filters onFiltersChange={handleFiltersChange} />
    </header>
  );
}
