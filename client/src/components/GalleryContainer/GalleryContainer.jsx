import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const GalleryContainer = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <ItemCard />
        </div>
        <div className="column">
          <ItemCard />
        </div>
        <div className="column">
          <ItemCard />
        </div>
        <div className="column">
          <ItemCard />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <ItemCard />
        </div>
        <div className="column">
          <ItemCard />
        </div>
        <div className="column">
          <ItemCard />
        </div>
        <div className="column">
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default GalleryContainer;
