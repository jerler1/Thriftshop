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

<<<<<<< HEAD
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

=======
>>>>>>> Move stripe integration to useCart hook
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
<<<<<<< HEAD
                className="navbar-item button cart-button"
=======
                className="button is-warning"
                style={{
                  height: "100%",
                }}
>>>>>>> Move stripe integration to useCart hook
                onClick={() => {
                  cart.toggleShowCart();
                }}
              >
<<<<<<< HEAD
                <i className="fas fa-shopping-cart"></i>&nbsp;Your Cart
              </button>
              <button
                className="navbar-item button cart-button"
                role="link"
                onClick={HandleCheckOut}
              >
                Checkout
=======
                <span className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
>>>>>>> Move stripe integration to useCart hook
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
