
import { useState } from "react";
import SearchFilter from "./searchFilter/searchFilter";
import styles from "/filters.module.css";

type FilterState = {
  Categories: string;
  "Sort by": string;
};

const categoryOptions: Array<string> = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];


const sortByOptions: Array<string> = ["relevance", "newest"];

export default function Filters() {
  const [filters, setFilters] = useState<FilterState>({
    Categories: "all",
    "Sort by": "relevance",
  });

  const handleFilterChange = (name: string, value: string) => {
    const updatedFilters = { ...filters, [name]: value };

    setFilters(updatedFilters);

    // Here you can "emit" the change
    // For instance, if you want to log it:
    console.log(updatedFilters);
  };

  return (
    <>
      <SearchFilter
        label="Categories"
        options={categoryOptions}
        onChange={handleFilterChange}
      />

      <SearchFilter
        label="Sort by"
        options={sortByOptions}
        onChange={handleFilterChange}
      />
    </>
  );
}
