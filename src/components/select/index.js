import React from "react";
import { SearchableSelect } from "./Search.js";

export default function Select({ options, onSelect }) {
  const handleSelectChange = (Option) => {
    onSelect(Option);
  };
  return <SearchableSelect options={options} onSelect={handleSelectChange} />;
}
