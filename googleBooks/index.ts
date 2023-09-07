const API_KEY = "AIzaSyAMtsurQidIdtm_sNnKpVeD1z5mNafzmFA";

interface VolumeInfo {
  title: string;
  authors: string[];
  categories: string[];
  description?: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

interface BookData {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

interface BooksList {
  kind: string;
  totalItems: number;
  items: Array<BookData>
}

export async function fetchGoogleBooks(
  searchTerm: string
  //   category: string,
): Promise<BooksList> {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const params = new URLSearchParams({
    q: `${searchTerm}`,
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

// Usage example:
