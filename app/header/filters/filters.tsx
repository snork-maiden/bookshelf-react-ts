import { useState } from "react";
import SearchFilter from "./searchFilter/searchFilter";
import { Categories, OrderByOptions } from "@/utils/googleBooks/interfaces";
import { FilterState } from "../header";

type FiltersProps = {
  onFiltersChange?: (filters: FilterState) => void;
};

const categoryOptions: Array<Categories> = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const sortByOptions: Array<OrderByOptions> = ["relevance", "newest"];

export default function Filters({ onFiltersChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    orderBy: "relevance",
  });

  const handleFilterChange = (name: string, value: string) => {
    const updatedFilters = { ...filters, [name]: value };

    setFilters(updatedFilters);

    if (onFiltersChange) {
      onFiltersChange(updatedFilters);
    }
  };

  return (
    <>
      <SearchFilter
        label="Categories"
        options={categoryOptions}
        onChange={(value:string) => handleFilterChange('category', value)}
      />

      <SearchFilter
        label="Sort by"
        options={sortByOptions}
        onChange={(value:string) => handleFilterChange('orderBy', value)}
      />
    </>
  );
}