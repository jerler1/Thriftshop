import React, { useState } from "react";
import api from "../../api";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    api
      .doSearch(query)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mb-4 p-4">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input" type="search" placeholder="Search..." val={query} onChange={handleInputChange} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
