import { BookData, BooksList } from "@/utils/googleBooks/interfaces";
import { makeAutoObservable } from "mobx";

class BookStore {
  books: BooksList | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  setBooks(data: BooksList) {
    this.books = data;
  }
  get booksAmount(): number | null {
    return this.books?.totalItems ?? null;
  }
  get booksList(): Array<BookData> {
    return this.books?.items || [];
  }
}

const bookStore = new BookStore();
export default bookStore;
