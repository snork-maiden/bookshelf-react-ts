import {
  BookData,
  BooksList,
  Categories,
  SortByOptions as OrderByOptions,
} from "./interfaces";

const API_KEY = "AIzaSyAMtsurQidIdtm_sNnKpVeD1z5mNafzmFA";
const maxResults = "30";

export async function searchGoogleBooks(
  searchTerm: string,
  category: Categories = "all",
  orderBy: OrderByOptions = "relevance"
): Promise<BooksList> {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const searchSting =
    category === "all" ? searchTerm : `${searchTerm}+subject:${category}`;
    
  const params = new URLSearchParams({
    q: searchSting,
    maxResults,
    orderBy: orderBy,
    key: API_KEY,
  });
  const url = `${baseUrl}?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch books. Status: ${response.statusText}`);
  }

  const data: BooksList = await response.json();
  return data;
}

export async function fetchGoogleBooksById(id: string): Promise<BookData> {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes/";
  const params = new URLSearchParams({
    key: API_KEY,
  });
  const url = `${baseUrl + id}?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch books. Status: ${response.statusText}`);
  }

  const data: BookData = await response.json();
  return data;
}
