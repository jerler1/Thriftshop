import React, { useEffect, useState } from "react";
import MiniCard from "../MiniCard/MiniCard";
import { useAuth } from "../../hooks/use-auth";
import Carousel from "../Carousel/Carousel"
import "../ItemCard/ItemCard.css";
import api from "../../api";

const HomeGallery = () => {
  const auth = useAuth();
  const [recItems, setRecItems] = useState([]);
  const [featItems, setFeatItems] = useState([])

  useEffect(() => {
    api.getInventory().then((res) => {
      setRecItems((res.data).reverse().slice(0,12));
    });
    api.getInventory().then((res) => {
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
