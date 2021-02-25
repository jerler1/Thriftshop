import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import api from "../../../api";
import "./Dashboard.css";

const items = [
  {
    id: 1,
    name: "Oak Dresser",
    description: "fancy dresser",
    category: "Furniture",
    price: "150",
    condition: "Good",
    image: "",
    status: "Sold",
  },
  {
    id: 2,
    name: "Oak Dresser",
    description: "fancy dresser",
    category: "Furniture",
    price: "150",
    condition: "Good",
    image: "",
    status: "Sold",
  },
  {
    id: 3,
    name: "Oak Dresser",
    description: "fancy dresser",
    category: "Furniture",
    price: "150",
    condition: "Good",
    image: "",
    status: "Sold",
  },
];

const Dashboard = (props) => {
  const auth = useAuth();
  const [storeItems, setStoreItems] = useState(items);

  useEffect(() => {
    api
      .getStorefront(auth.user.storefront)
      .then((data) => {
        // Set the items.
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
          .then((data) => {
            // Set the items.
          })
          .catch((err) => {
            // Do something with error.
          });
      })
      .catch((err) => {
        // Show a notification or something.
      });
  };

  const tableHeadings = Object.keys(storeItems[0]).filter((heading) => heading !== "id");

  return auth.user ? (
    <div className="container">
      <header className="mb-4">
        <h2 className="title">Welcome back, {auth.user.email}</h2>
      </header>
      <section className="mb-4">
        <h2 className="title">Metrics?</h2>
      </section>
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            {tableHeadings.map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {tableHeadings.map((heading, i) => (
                <td key={i}>{item[heading]}</td>
              ))}
              <td className="is-flex is-justify-content-space-around">
                <Link to={`/admin/editItem/${item.id}`}>
                  <span className="icon">
                    <i className="far fa-edit"></i>
                  </span>
                </Link>
                <span className="icon has-text-danger is-clickable" onClick={() => handleDelete(item.id)}>
                  <i className="fas fa-trash-alt"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Redirect to="/admin" />
  );
};

export default Dashboard;
