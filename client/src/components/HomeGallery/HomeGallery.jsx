import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import AdminFooter from "../AdminFooter/AdminFooter";
import ClientFooter from "../ClientFooter/ClientFooter";
import { useAuth } from "../../hooks/use-auth";
import "../ItemCard/ItemCard.css";
import api from "../../api";

const HomeGallery = () => {
  const auth = useAuth();
  const [recItems, setRecItems] = useState([]);

  useEffect(() => {
    api.getInventory().then((res) => setRecItems((res.data).slice(0,4)))
  }, [])
  return (
    <div className="container">
        <h1 className="title">Recently Added Items:</h1>
        <div className="columns">
        {recItems.map(recItem => {
          return (<ItemCard key={recItem._id} item={recItem}>{auth.user ? <AdminFooter item={recItem}/> : <ClientFooter item={recItem}/>}</ItemCard>);
        })}
      </div>
        <h1 className="title">Featured Items:</h1>
        <div className="columns">
        {recItems.map(recItem => {
          return (<ItemCard key={recItem._id} item={recItem}>{auth.user ? <AdminFooter item={recItem}/> : <ClientFooter item={recItem}/>}</ItemCard>);
        })}
      </div>
    </div>
  );
};

export default HomeGallery;
