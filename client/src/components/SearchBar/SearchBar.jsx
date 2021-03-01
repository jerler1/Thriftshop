import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import api from "../../api";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  // Sync the input state
  useEffect(() => {
    if (location.state) {
      setQuery(location.state.query);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .doSearch(query)
      .then((data) => {
        history.push(`/listing?q=${query}`, {
          items: data,
          query,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mb-4 p-4">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input" type="search" placeholder="Search..." value={query} onChange={handleInputChange} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
