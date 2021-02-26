import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import AdminFooter from "../AdminFooter/AdminFooter";
import ClientFooter from "../ClientFooter/ClientFooter";
import { useAuth } from "../../hooks/use-auth";
import api from "../../api/index";
import "../ItemCard/ItemCard.css";

const GalleryContainer = () => {
  const [invItems, setInvItems] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    loadInventory();
  }, []);


  function loadInventory() {
    api
      .getInventory()
      .then((res) => setInvItems(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="columns is-multiline">
        {invItems.map(invItem => {
          return (<ItemCard key={invItem._id} item={invItem}>{auth.user ? <AdminFooter item={invItem}/> : <ClientFooter item={invItem}/>}</ItemCard>);
        })}
      </div>
    </div>
  );
};

export default GalleryContainer;
