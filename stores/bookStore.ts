import { BooksList } from "@/utils/googleBooks/interfaces";
import { makeAutoObservable } from "mobx";

class BookStore {
  books: BooksList | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  setBooks(data: BooksList) {
    this.books = data;
  }
}

const bookStore = new BookStore();
export default bookStore;
