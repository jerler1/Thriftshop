import React from "react";
import AdminFooter from "../AdminFooter/AdminFooter";
import "./ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className="column">
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
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
