import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
import { useAuth } from "../../hooks/use-auth";
import { useCart } from "../../hooks/useCart";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const cart = useCart();
  const setActive = () => {
    setIsActive(!isActive);
  };

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout().catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <nav
        className="navbar is-warning navbar-height mb-6 whole-nav is-relative"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-start">
          <div className="navbar-brand parentBrand">
            <Link className="navbar-item navbrand vertical" to="/">
              Thrift Shop²
              <span className="childBrand2">The Thrift Shop's Shop</span>
            </Link>
            {/* <p className="navbar-item tag-line is-hidden-mobile">The Thrift Shop's Shop</p> */}
            <div className="navbar-burger burger-box" onClick={setActive}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* <SearchBar /> */}
        <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
          {!auth.user ? (
            <div className="navbar-end">
              <Link to="/listing" className="navbar-item">
                View All Items
              </Link>
              <Link to="/admin" className="navbar-item">
                Admin Login
              </Link>
              <button
                className="button cart-button"
                style={{
                  height: "100%",
                }}
                onClick={() => {
                  cart.toggleShowCart();
                }}
              >
                <span className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
              </button>
            </div>
          ) : (
            <div className="navbar-end">
              <Link to="/admin/dashboard" className="navbar-item">
                Dashboard
              </Link>
              <Link to="/" className="navbar-item" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          )}
        </div>
        {cart.showCart && <ShoppingCart />}
      </nav>
    </>
  );
};

export default Navbar;
