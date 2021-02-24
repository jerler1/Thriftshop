import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import AdminFooter from "../AdminFooter/AdminFooter";
import ClientFooter from "../ClientFooter/ClientFooter";
import { useAuth } from "../../hooks/use-auth";
import "../ItemCard/ItemCard.css";

const GalleryContainer = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <div className="columns">
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
      </div>
      <div className="columns">
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
        <ItemCard>{auth.user ? <AdminFooter /> : <ClientFooter />}</ItemCard>
      </div>
    </div>
  );
};

export default GalleryContainer;
