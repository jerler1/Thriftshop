import React from "react";
import "./ItemCard.css";

const ItemCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://www.placecage.com/1280/960"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div>
            <p className="title is-4">Thrift Item</p>
            <p className="subtitle is-7">Store Section</p>
          </div>
        </div>

        <div className="content">
          A short amount of details about the item listed here. 
        </div>
        <div className="card-footer admin-footer">
            {/* <a className="card-footer-item">Unlist</a>
            <a className="card-footer-item">Edit</a>
            <a className="card-footer-item">Remove</a> */}
            <a className="card-footer-item">Reserve</a>
            <a className="card-footer-item">Add to Cart</a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
