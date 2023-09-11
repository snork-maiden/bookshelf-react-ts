"use client";
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
import { Playfair_Display } from "next/font/google";
import GoogleApiError from "@/app/googleApiError/googleApiError";
import { useRouter } from "next/navigation";
const playfairDisplay = Playfair_Display({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
});

export interface FilterState {
  category: Categories;
  orderBy: OrderByOptions;
}

export default function Header() {
  const router = useRouter();
  let searchString = "";
  const [error, setError] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    category: "all",
    orderBy: "relevance",
    searchString: "",
    page: 0,
  });
  useEffect(() => {
    async function searchBooks(): Promise<void> {
      setError(false);
      if (!searchParams.searchString) return;
      try {
        let data = await searchGoogleBooks(searchParams);
        bookStore.setBooks(data);
        searchParamsStore.setParams(searchParams);
        router.push("/");
      } catch (error) {
        setError(true);
      }
    }
    searchBooks();
  }, [searchParams, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchString = e.target.value;
  };

  const handleFiltersChange = (filters: any) => {
    setSearchParams({ ...searchParams, ...filters });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSearchParams({ ...searchParams, ...{ searchString: searchString } });
    e.preventDefault();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title + " " + playfairDisplay.className}>
        Search for books in Google Books
      </h1>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.search}>
          <input
            type="search"
            name="search-form"
            id="search-form"
            onChange={handleInputChange}
            required
          />
          <button type="submit" className={styles.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 17 17">
              <path
                fill="#119da4ff"
                fillRule="evenodd"
                d="M6.11 15.5c-.58.58-2.1.9-2.1-1v-13c0-1.83 1.52-1.58 2.1-1l6.45 6.45c.58.58.58 1.52 0 2.1L6.1 15.5Z"
              />
            </svg>
          </button>
        </div>
      </form>
      <Filters onFiltersChange={handleFiltersChange} />
      {error && <GoogleApiError />}
    </header>
  );
}
