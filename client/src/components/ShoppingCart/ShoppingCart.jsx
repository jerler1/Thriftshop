import { useCart } from "../../hooks/useCart";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const cart = useCart();
  return (
    <div className="ShoppingCart">
      <div className="box">
        <button
          className="delete"
          style={{
            position: "relative",
            left: "-10px",
            top: "-10px",
          }}
          onClick={() => {
            cart.toggleShowCart();
          }}
        ></button>
        <h3 className="title is-3">Shopping Cart</h3>
        {cart.cartItems.length ? (
          <>
            <ul>
              {cart.cartItems.map((item) => {
                return (
                  <li
                    className="p-4 mb-4 is-flex is-justify-content-space-between is-align-items-center ShoppingCart-item"
                    key={item._id}
                  >
                    <figure className="image">
                      <img src={item.image[0]} alt={item.name} />
                    </figure>
                    <span>{item.name}</span>
                    <span className="has-text-weight-semibold">${item.price}</span>
                    <button
                      className="button is-danger is-outlined"
                      onClick={() => {
                        cart.removeFromCart(item._id);
                      }}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="buttons is-right">
              <button
                className="button is-dark is-outlined"
                onClick={() => {
                  cart.toggleShowCart();
                }}
              >
                Close
              </button>{" "}
              <button className="button is-primary" onClick={cart.handleCheckOut}>
                Check Out
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
