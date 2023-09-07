import { BooksList } from "./interfaces";

const API_KEY = "AIzaSyAMtsurQidIdtm_sNnKpVeD1z5mNafzmFA";
const maxResults = "30";



export async function fetchGoogleBooks(
  searchTerm: string
  //   category: string,
): Promise<BooksList> {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
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
