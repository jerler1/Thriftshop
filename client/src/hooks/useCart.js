import { useState, useContext, createContext } from "react";

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
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (itemId) => setCartItems(cartItems.filter((item) => item._id !== itemId));
  const toggleShowCart = () => setShowCart(!showCart)

  return {
    cartItems,
    showCart,
    toggleShowCart,
    addToCart,
    removeFromCart,
  };
}
