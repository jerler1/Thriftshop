import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
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
  const [searchQuery, setSearchQuery] = useState("");
  const auth = useAuth();
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (location.state) {
      setSearchQuery(location.state.query);
      setInvItems(location.state.items);
    } else {
      loadInventory();
    }
  }, [location]);

  function loadInventory() {
    api
      .getInventory()
      .then((res) => setInvItems(res.data))
      .catch((err) => console.log(err));
  }

  const handleCatClick = (e) => {
    console.log(encodeURIComponent(e.target.name));
    let subCat = window.encodeURIComponent(e.target.name);
    api.getSubCategory(subCat).then((res) => setInvItems(res.data)).catch((err) => console.log(err));
  };


  return (
    <div className="columns mob-columns">
        <Sidebar handleCatClick={handleCatClick} allClick={loadInventory}/>
      <div className="container gallery">
        <SearchBar />
        {searchQuery && (
        <h2 className="title is-4 has-text-centered">
          {invItems.length ? `Showing ${invItems.length}` : "No"} results for '{searchQuery}'.
        </h2>
      )}
        <div className="columns is-multiline mob-columns">
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
