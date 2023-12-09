"use client";

import { useState } from "react";
import SearchManufacturer from "../SearchManufacturer/SearchManufacturer";
import SearchBarButton from "./SearchBarButton/SearchBarButton";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchBarButton />
      </div>
    </form>
  );
};

export default SearchBar;
