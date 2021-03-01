import React from "react";
import "./MiniCard.css";

const MiniCard = (props) => {
  return (
    <a href={`/listing/${props.item._id}`}className="column is-one-quarter mini-slide">
      <div className="card card-equal-height">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.item.image} alt={props.item.description} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div>
              <p className="title is-6">{props.item.name}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MiniCard;
