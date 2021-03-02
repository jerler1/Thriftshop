import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../api/index";
import "./Success.css";
import photo from "../../images/happy.jpg";

const Success = () => {
  const [checkoutObject, setCheckoutObject] = useState({});
  let location = useLocation();

  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  useEffect(() => {
    API.getCheckOutObject(id)
      .then((sessionObject) => setCheckoutObject(sessionObject))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <div className="hero has-background-info-dark banner has-text-white">
        <div className="hero-body">
          <h1 className="is-size-1 has-text-centered">
            Thank you for your purchase.
          </h1>
          <h3 className="is-size-3 has-text-centered">Enjoy!</h3>
        </div>
      </div>
      <div className="container">
        <div className="columns mt-6">
          <div className="column leftColumnCheckout">
            <ul className="postPurchaseMessages p-4 has-background-info-light has-text-weight-medium">
              <li>Invoice Number: {checkoutObject.invoiceNumber}.</li>
              <li>Status: {checkoutObject.payment_status}.</li>
              <li>Subtotal: {checkoutObject.amount_subtotal / 100}.</li>
              <li>
                You will receive an email confirmation/invoice at{" "}
                {checkoutObject?.customer_details?.email}.
              </li>
            </ul>
          <Link className="button postButton has-background-link-dark has-text-white" to="/">Return to Shopping</Link>
            
          </div>
          <div className="column">
              <img className="postPurchasePhoto" src={photo} alt="happy shopper"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
