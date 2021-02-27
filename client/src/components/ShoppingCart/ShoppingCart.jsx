import { useCart } from "../../hooks/useCart";

export default function ShoppingCart() {
  const cart = useCart();
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          {cart.cartItems.map((item) => {
            return (
              <p>
                {item.name}
                <button className="delete" onClick={() => {
                  cart.removeFromCart(item._id);
                }}></button>
              </p>
            );
          })}
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          cart.toggleShowCart();
        }}
      ></button>
    </div>
  );
}
