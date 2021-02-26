import React from "react";
import "./ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={props.item.image}
              alt={props.item.description}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div>
              <p className="title is-4">{props.item.name}</p>
              <p className="subtitle is-7">{props.item.category}</p>
            </div>
          </div>

          <div className="content">
            {props.item.description}
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
