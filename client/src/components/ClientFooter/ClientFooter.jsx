import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const ClientFooter = (props) => {
  const cart = useCart();

  return (
    <div className="is-flex is-flex-direction-column" id={props.key}>
      <Link to={`/listing/${props.item._id}`} className="button is-light mb-2">
        See Details
      </Link>
      <button
        className="button is-primary"
        onClick={() => {
          cart.addToCart(props.item);
        }}
      >
        Add to Cart
      </button>
      {/* <Link to="/listing" className="card-footer-item">Reserve</Link> */}
    </div>
  );
};

export default ClientFooter;
