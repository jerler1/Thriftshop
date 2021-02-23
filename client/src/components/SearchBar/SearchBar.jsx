import React from "react";

const SearchBar = () => {
  return (
      <div className="shadow flex">
        <input className="w-full rounded p-2" type="text" placeholder="Search..." />
        <button className="bg-green-400 w-auto flex justify-end items-center text-black p-2 hover:bg-green-200">
          <i className="fas fa-search"></i>
        </button>
      </div>
  );
};

export default SearchBar;
