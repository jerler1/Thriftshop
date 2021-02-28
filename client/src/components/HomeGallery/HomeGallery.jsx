import React, { useEffect, useState } from "react";
import MiniCard from "../MiniCard/MiniCard";
import { useAuth } from "../../hooks/use-auth";
import "../ItemCard/ItemCard.css";
import api from "../../api";

const HomeGallery = () => {
  const auth = useAuth();
  const [recItems, setRecItems] = useState([]);

  useEffect(() => {
    api.getInventory().then((res) => setRecItems((res.data).reverse().slice(0,8)))
  }, [])
  return (
    <div className="container">
        <h1 className="title">Recently Added Items:</h1>
        <div className="columns">
        {recItems.map(recItem => {
          return (<MiniCard key={recItem._id} item={recItem}></MiniCard>);
        })}
      </div>
        <h1 className="title">Featured Items:</h1>
        <div className="columns">
        {recItems.map(recItem => {
          return (<MiniCard key={recItem._id} item={recItem}></MiniCard>);
        })}
      </div>
    </div>
  );
};

export default HomeGallery;
