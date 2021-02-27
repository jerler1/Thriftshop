import React from "react";

const SearchBar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
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
    </nav>
  );
};

export default SearchBar;
