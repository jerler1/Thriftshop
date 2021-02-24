import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useAuth } from "../../hooks/use-auth";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const setActive = () => {
    setIsActive(!isActive);
  };

  const auth = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    auth
      .logout()
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
          {auth.user ? (
            <Link to="/admin/dashboard" className="navbar-item">
              Dashboard
            </Link>
          ) : (
            ""
          )}
          {!auth.user ? (
            <Link to="/admin" className="navbar-item">
              Admin Login
            </Link>
          ) : (
            <Link className="navbar-item" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
