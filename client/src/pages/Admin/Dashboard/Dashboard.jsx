import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import api from "../../../api";
import Chart from "../../../components/DashboardChart/DashboardChart";
import "./Dashboard.css";

const Dashboard = (props) => {
  const auth = useAuth();
  const [storeItems, setStoreItems] = useState([
    {
      name: "",
      description: "",
      category: "",
      price: "",
      condition: "",
      image: [],
      status: "",
      storefront: "",
    },
  ]);

  useEffect(() => {
    api
      .getStorefront(auth.user.storefront)
      .then((store) => {
        setStoreItems(store.items);
      })
      .catch((err) => {
        // Do something with error.
      });
  }, [auth]);

  const handleDelete = (id) => {
    api
      .deleteItem(id)
      .then((data) => {
        api
          .getStorefront(auth.user.storefront)
          .then((store) => {
            // Set the items.
            setStoreItems(store.items);
          })
          .catch((err) => {
            // Do something with error.
          });
      })
      .catch((err) => {
        // Show a notification or something.
      });
  };

  return (
    <div className="container">
      <header className="mb-4">
        <h2 className="title">Welcome back, {auth.user.email}</h2>
      </header>
      <section className="mb-4">
        <h2 className="title">Metrics?</h2>
      </section>
      <Chart storeItems={storeItems} handleDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
