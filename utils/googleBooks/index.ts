import { BookData, BooksList } from "./interfaces";

const API_KEY = "AIzaSyAMtsurQidIdtm_sNnKpVeD1z5mNafzmFA";
const maxResults = "30";

interface googleBooksFetchParameters {
  searchTerm: string;
  category?: string;
  sortByNewest?: boolean;
}

export async function searchGoogleBooks(
  searchTerm: string
  //   category: string,
): Promise<BooksList> {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  // const searchSting =
  const params = new URLSearchParams({
    q: `${searchTerm}`,
    key: API_KEY,
    maxResults,
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
