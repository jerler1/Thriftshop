import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import AdminFooter from "../AdminFooter/AdminFooter";
import ClientFooter from "../ClientFooter/ClientFooter";
import { useAuth } from "../../hooks/use-auth";
import "../ItemCard/ItemCard.css";

const HomeGallery = () => {
  const auth = useAuth();
  return (
    <div className="container">
        <h1 className="title">Recently Added Items:</h1>
        <div className="columns">
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
      </div>
        <h1 className="title">Featured Items:</h1>
        <div className="columns">
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
      </div>
    </div>
  );
};

export default HomeGallery;
