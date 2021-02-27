import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <div className="container">
        <nav
          className="navbar is-fullwidth"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-item search-bar">
            <input
              className="input is-fullwidth search-bar"
              type="search"
              placeholder="Search..."
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SearchBar;
