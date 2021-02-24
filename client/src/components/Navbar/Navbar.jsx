import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const setActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav
      className="navbar is-warning navbar-height"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-start">
        <div className="navbar-brand">
          <Link className="navbar-item navbrand" to="/">
            Thrift Shop²
          </Link>
          <p className="navbar-item tag-line">The Thrift Shop's Shop</p>
          <div className="navbar-burger burger-box" onClick={setActive}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <SearchBar />
      <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <Link to="/admin" className="navbar-item">
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
