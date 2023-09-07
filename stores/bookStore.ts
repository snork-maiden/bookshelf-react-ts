import { makeAutoObservable } from "mobx";

class BookStore {
  books = null;
  constructor() {
    makeAutoObservable(this);
  }

  setBooks(data: any) {
    this.books = data;
  }
}

const bookStore = new BookStore();
export default bookStore;
