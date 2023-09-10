export interface SearchParams {
  searchString: string;
  category: Categories;
  orderBy: OrderByOptions;
  page: number;
}

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

export interface BookData {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface BooksList {
  kind: string;
  totalItems: number;
  items: Array<BookData>;
}

export type Categories =
  | "all"
  | "art"
  | "biography"
  | "computers"
  | "history"
  | "medical"
  | "poetry";

export type OrderByOptions = "relevance" | "newest";
