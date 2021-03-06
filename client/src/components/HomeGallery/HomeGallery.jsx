import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel"
import "../ItemCard/ItemCard.css";
import api from "../../api";

const HomeGallery = () => {
  const [recItems, setRecItems] = useState([]);
  const [featItems, setFeatItems] = useState([])

  useEffect(() => {
    api.getAvailInventory().then((res) => {
      setRecItems((res.data).reverse().slice(0,12));
    });
    api.getAvailInventory().then((res) => {
      setFeatItems((res.data).slice(0,12));
    })
  }, [])



  return (
    <div className="container">
        <h1 className="title">Recently Added Items:</h1>
        <Carousel minis={recItems}/>
        <br/>
        <h1 className="title">Featured Items:</h1>
        <Carousel minis={featItems}/>
    </div>
  );
};

export default HomeGallery;
