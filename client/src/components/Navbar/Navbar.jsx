import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
import { useAuth } from "../../hooks/use-auth";
import { useCart } from "../../hooks/useCart";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { loadStripe } from "@stripe/stripe-js";
import "./Navbar.css";

const stripePromise = loadStripe(
  "pk_test_51IPhcIG7oxYUGKJCY4GkNWBFbgXwvNKTlmmJNeLOarK1J3DSvpvI9f65OcfurdeT8zKz3vmO5eUlnP5n3AIfKR1C00tL4qrsVY"
);

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

  const HandleCheckOut = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Calling checkout route.
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // Redirecting to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
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
                className="navbar-item button cart-button"
                onClick={() => {
                  cart.toggleShowCart();
                }}
              >
                <i className="fas fa-shopping-cart"></i>&nbsp;Your Cart
              </button>
              <button
                className="navbar-item button cart-button"
                role="link"
                onClick={HandleCheckOut}
              >
                Checkout
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
