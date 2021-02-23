import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  // document.getElementById("hamburger").onclick = function toggleMenu() {
  //     const navToggle = document.getElementsByClassName("toggle");
  //     for (let i=0; i< navToggle.length; i++) {
  //         navToggle.item(i).classList.toggle("hidden");
  //     }
  // };

  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-gray-300">
      <h1 className="font-bold text-3xl">Thrift World</h1>
      <p className="object-left">The Thrift Shop Shop</p>
      <SearchBar />
      <div>
          <div className="flex md:hidden">
        <button id="hamburger">
          <i className="fas fa-bars toggle block" />
          <i className="fas fa-times toggle hidden" />
        </button>
      </div>
      <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <Link className="block md:inline-block text-blue-900 hover:text-blue-600 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          Link 1
        </Link>
        <Link className="block md:inline-block text-blue-900 hover:text-blue-600 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          Link 2
        </Link>
        <Link className="block md:inline-block text-blue-900 hover:text-blue-600 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          Link 3
        </Link>
        <Link className="block md:inline-block text-blue-900 hover:text-blue-600 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          Link 4
        </Link>
      </div>

      </div>
      
    </nav>
  );
};

export default Navbar;
