import {
  BookData,
  BooksList,
  SearchParams
} from "./interfaces";

const API_KEY = "AIzaSyAMtsurQidIdtm_sNnKpVeD1z5mNafzmFA";
const maxResults = "30";

export async function searchGoogleBooks(searchParams: SearchParams): Promise<BooksList> {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const startIndex = (+maxResults * searchParams.page).toString();
  const searchSting =
      searchParams.category === "all" ? searchParams.searchString : `${searchParams.searchString}+subject:${searchParams.category}`;

  const params = new URLSearchParams({
    q: searchSting,
    maxResults,
    orderBy: searchParams.orderBy,
    key: API_KEY,
    startIndex,
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