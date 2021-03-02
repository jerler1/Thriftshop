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

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    api
      .getStorefront(auth.user.storefront)
      .then((store) => {
        setInvoices(store.invoices);
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
        <h2 className="title">Welcome back, {auth.user.firstname}</h2>
        <Link className="button is-primary is-outlined" to="/admin/addItem">
          Add Items
        </Link>
      </header>
      <section className="mb-4">
        <div
          className="mb-4"
          style={{
            display: "flex",
            gap: "1rem"
          }}
        >
          <div
            style={{
              borderRadius: 8,
              width: "50%"
            }}
            className="p-4 has-background-info-light"
          >
            <h2 className="title is-2">Total Orders</h2>
            <p className="subtitle is-4 has-text-right">{invoices.length}</p>
          </div>
          <div
            style={{
              borderRadius: 8,
              width: "50%"
            }}
            className="p-4 has-background-info-light"
          >
            <h2 className="title is-2">Total Revenue</h2>
            {/** compute the actual total.*/}
            <p className="subtitle is-4 has-text-right">$1000.00</p>
          </div>
        </div>
        <h2 className="title is-4">Invoices</h2>
        {/** This should probably be a table. */}
        <ol style={{
          listStyle: 'none'
        }}>
          {invoices.map((invoice) => (
            <li key={invoice._id}>{invoice.customerName} $29.99</li>
          ))}
        </ol>
      </section>
      <Chart storeItems={storeItems} handleDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
