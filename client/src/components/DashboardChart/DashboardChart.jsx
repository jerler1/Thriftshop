import React from "react";
import { Link } from "react-router-dom";
import "./DashboardChart.css";

const DashboardChart = ({ storeItems, handleDelete }) => {
  let tableHeadings = [
    "image",
    "status",
    "name",
    "category",
    "price",
    "condition",
  ];

  return (
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
        {storeItems.length ? (
          storeItems.map((item) => (
            <tr key={item.id}>
              {tableHeadings.map((heading, i) => {
                if (heading === "image") {
                  return (
                    <td>
                      <img key={i} src={item.image[0]} alt="product" width="100" />
                    </td>
                  );
                } else {
                  return <td key={i}>{item[heading]}</td>;
                }
              })}
              <td>
                <span className="is-flex is-justify-content-space-around">
                  <Link to={`/admin/editItem/${item._id}`}>
                    <span className="icon">
                      <i className="far fa-edit"></i>
                    </span>
                  </Link>
                  <span
                    className="icon has-text-danger is-clickable"
                    onClick={() => handleDelete(item._id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </span>
                </span>
              </td>
            </tr>
          ))
        ) : (
          <h1>Sorry, no results were found.</h1>
        )}
      </tbody>
    </table>
  );
};

export default DashboardChart;
