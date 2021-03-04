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
  const [pageOffset, setPageOffset] = useState(0);
  const pageSize = 10;

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

  const handlePageForward = () => {
    setPageOffset(pageOffset + pageSize);
  };

  const handlePageBack = () => {
    setPageOffset(pageOffset - pageSize);
    // setPageOffset((current) => {
    //   let newVal = current - pageSize;
    //   return newVal < 0 ? 0 : newVal;
    // });
  };

  const totalRevenue = invoices.reduce((total, invoice) => {
    return (
      total +
      invoice.purchasedItems.reduce((invoiceTotal, item) => {
        return invoiceTotal + parseInt(item.itemTotal, 10);
      }, 0)
    );
  }, 0);

  const currencyFormatter = Intl.NumberFormat([], {
    style: "currency",
    currency: "usd",
  });

  const dateFormatter = Intl.DateTimeFormat([], {
    dateStyle: "medium",
  });

  const invoicesToShow = [...invoices].reverse().slice(pageOffset, pageOffset + pageSize);

  return (
    <div className="container">
      <header className="mb-4">
        <h2 className="title">Welcome back, {auth.user.firstname}</h2>
      </header>
      <section className="mb-4">
        <div
          className="mb-4"
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <div
            style={{
              borderRadius: 8,
              width: "50%",
            }}
            className="p-4 has-background-info-light"
          >
            <h2 className="title is-2">Total Orders</h2>
            <p className="subtitle is-4 has-text-right">{invoices.length}</p>
          </div>
          <div
            style={{
              borderRadius: 8,
              width: "50%",
            }}
            className="p-4 has-background-info-light"
          >
            <h2 className="title is-2">Total Revenue</h2>
            <p className="subtitle is-4 has-text-right">{currencyFormatter.format(totalRevenue / 100)}</p>
          </div>
        </div>
        <h2 className="title is-4">Invoices</h2>
        {/** TODO: Refactor this? */}
        <div className="is-flex" style={{ gap: "1rem" }}>
          <button className="button is-info" onClick={handlePageBack} disabled={pageOffset === 0}>
            <span className="icon">
              <i className="fas fa-long-arrow-alt-left"></i>
            </span>
          </button>
          <button
            className="button is-info"
            onClick={handlePageForward}
            disabled={pageOffset + pageSize >= invoices.length}
          >
            <span className="icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </button>
          <span>
            Showing {pageOffset + 1} to {pageOffset + invoicesToShow.length} of {invoices.length}.
          </span>
        </div>
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Date</th>
              <th>Email</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoicesToShow.map((invoice) => (
              <tr key={invoice._id}>
                <td>{dateFormatter.format(new Date(invoice.orderDate))}</td>
                <td>{invoice.customerEmail}</td>
                <td>{currencyFormatter.format(invoice.purchaseTotal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div>
        <div className="is-flex is-align-items-baseline" style={{ gap: "1rem" }}>
          <h2 className="title is-4">Your Store's Items</h2>
          <Link className="button is-primary is-outlined" to="/admin/addItem">
            Add Items
          </Link>
        </div>
        <Chart storeItems={storeItems} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Dashboard;
