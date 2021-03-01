import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ItemCard from "../ItemCard/ItemCard";
import AdminFooter from "../AdminFooter/AdminFooter";
import ClientFooter from "../ClientFooter/ClientFooter";
import { useAuth } from "../../hooks/use-auth";
import api from "../../api/index";
import "./GalleryContainer.css";
import "../ItemCard/ItemCard.css";
import Sidebar from "../Sidebar/Sidebar";

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

  const handleCatClick = (e) => {
    console.log(encodeURIComponent(e.target.text));
    let subCat = window.encodeURIComponent(e.target.text);
    api.getSubCategory(subCat).then((res) => setInvItems(res.data)).catch((err) => console.log(err));
  };


  return (
    <div className="columns">
        <Sidebar handleCatClick={handleCatClick} allClick={loadInventory}/>
      <div className="container gallery">
        <SearchBar />
        <div className="columns is-multiline">
          {invItems.map((invItem) => {
            return (
              <ItemCard key={invItem._id} item={invItem}>
                {auth.user ? (
                  <AdminFooter item={invItem} />
                ) : (
                  <ClientFooter item={invItem} />
                )}
              </ItemCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryContainer;
