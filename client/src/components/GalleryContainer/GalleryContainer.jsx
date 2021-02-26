import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import AdminFooter from "../AdminFooter/AdminFooter";
import ClientFooter from "../ClientFooter/ClientFooter";
import { useAuth } from "../../hooks/use-auth";
import api from "../../api/index";
import "../ItemCard/ItemCard.css";

const GalleryContainer = () => {
  const [items, setItems] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    loadInventory();
  }, []);


  function loadInventory() {
    api
      .getInventory()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="columns is-multiline">
        {items.map(item => {
          return (<ItemCard key={item._id} item={item}>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>);
        })}
      </div>
    </div>
  );
};

export default GalleryContainer;
