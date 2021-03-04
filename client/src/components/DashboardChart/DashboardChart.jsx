import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardChart.css";

const DashboardChart = ({ storeItems, handleDelete }) => {
  let tableHeadings = ["image", "status", "name", "category", "price", "condition"];
  const [pageOffset, setPageOffset] = useState(0);
  const pageSize = 10;

  const handlePageBack = () => {
    setPageOffset(pageOffset - pageSize);
    // setPageOffset((current) => {
    //   let newVal = current - pageSize;
    //   return newVal < 0 ? 0 : newVal;
    // });
  };

  const handlePageForward = () => {
    setPageOffset(pageOffset + pageSize);
  };

  const storeItemsToShow = [...storeItems].slice(pageOffset, pageOffset + pageSize);

  return (
    <>
      <div className="is-flex" style={{ gap: "1rem" }}>
        <button className="button is-info" onClick={handlePageBack} disabled={pageOffset === 0}>
          <span className="icon">
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
        </button>
        <button
          className="button is-info"
          onClick={handlePageForward}
          disabled={pageOffset + pageSize >= storeItems.length}
        >
          <span className="icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </button>
        <span>
          Showing {pageOffset + 1} to {pageOffset + storeItemsToShow.length} of {storeItems.length}.
        </span>
      </div>
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            {tableHeadings.map((heading, i) => (
              <th key={i}>{heading.toUpperCase()}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {storeItems.length ? (
            storeItemsToShow.map((item) => (
              <tr key={item._id}>
                {tableHeadings.map((heading, i) => {
                  if (heading === "image") {
                    return (
                      <td key={i}>
                        <img src={item.image[0]} alt="product" width="75" />
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
                    <span className="icon has-text-danger is-clickable" onClick={() => handleDelete(item._id)}>
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
    </>
  );
};

export default DashboardChart;
