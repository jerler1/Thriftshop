import React from "react";

const SearchBar = () => {
  return (
    <div className="navbar-item search-bar">
        <div className="field">
          <div className="control is-expanded">
            <input
              className="input is-fullwidth search-bar"
              type="search"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
  );
};

export default SearchBar;
