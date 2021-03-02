import { useState, useContext, createContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51IPhcIG7oxYUGKJCY4GkNWBFbgXwvNKTlmmJNeLOarK1J3DSvpvI9f65OcfurdeT8zKz3vmO5eUlnP5n3AIfKR1C00tL4qrsVY"
);

const cartContext = createContext();

export function ProvideCart({ children }) {
  const cart = useProvideCart();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

export const useCart = () => {
  return useContext(cartContext);
};

function useProvideCart() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    if(cartItems.some(cartItem => cartItem._id === item._id)){
      alert("Item already in your cart!")
    } else {
      setCartItems([...cartItems, item]);
    }
    // setCartItems([...cartItems, item]);
  };
  const removeFromCart = (itemId) => setCartItems(cartItems.filter((item) => item._id !== itemId));
  const toggleShowCart = () => setShowCart(!showCart);

  const handleCheckOut = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Calling checkout route.
    const { data: session } = await axios.post("/api/checkout/create-checkout-session", { cartItems });

    // Redirecting to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return {
    cartItems,
    showCart,
    toggleShowCart,
    addToCart,
    removeFromCart,
    handleCheckOut,
  };
}
