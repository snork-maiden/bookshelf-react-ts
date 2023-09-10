import { SearchParams } from "@/utils/googleBooks/interfaces";
import { makeAutoObservable } from "mobx";

class SearchParamsStore {
  searchParams: SearchParams = {
    category: "all",
    orderBy: "relevance",
    searchString: "",
    page: 0,
  };
  constructor() {
    makeAutoObservable(this);
  }

  setParams(params: SearchParams) {
    this.searchParams = params;
  }
  increasePageNumber() {
    this.searchParams = {
      ...this.searchParams,
      ...{ page: ++this.searchParams.page },
    };
  }
}

const searchParamsStore = new SearchParamsStore();
export default searchParamsStore;
