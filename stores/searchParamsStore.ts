import { Categories, SortByOptions } from "@/utils/googleBooks/interfaces";
import { makeAutoObservable } from "mobx";

export interface SearchParamsState {
  Categories: Categories;
  "Sort by": SortByOptions;
  searchString: string;
  pageNumber: number;
}

class SearchParamsStore {
  searchParams: SearchParamsState = {
    Categories: "all",
    "Sort by": "relevance",
    searchString: "",
    pageNumber: 0,
  };
  constructor() {
    makeAutoObservable(this);
  }

  // setParam<K extends keyof SearchParamsState>(
  //   name: K,
  //   value: SearchParamsState[K]
  // ) {
  //   this.searchParams = { ...this.searchParams, ...{ [name]: value } };
  // }

  setParams(params: SearchParamsState) {
    this.searchParams = params;
  }
  increasePageNumber() {
    this.searchParams = {
      ...this.searchParams,
      ...{ pageNumber: this.searchParams.pageNumber++ },
    };
  }
  // get booksAmount(): number | null {
  //   return this.searchParams?.totalItems ?? null;
  // }
  // get getSearchParams(): SearchParamsState {
  //   return this.searchParams;
  // }
}

const searchParamsStore = new SearchParamsStore();
export default searchParamsStore;
