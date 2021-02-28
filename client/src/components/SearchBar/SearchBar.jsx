import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container mb-4 p-4">
      <form>
        <div className="field">
          <div className="control">
            <input className="input" type="search" placeholder="Search..." />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
