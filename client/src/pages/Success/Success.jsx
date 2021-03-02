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
  console.log(checkoutObject);
  return (
    <div>
      <div className="hero is-primary banner">
        <div className="hero-body">
          <h1 className="is-size-1 has-text-centered">
            Thank you for your purchase.
          </h1>
          <h3 className="is-size-3 has-text-centered">Enjoy!</h3>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column mt-6">
            <ul className="postPurchaseMessages">
              <li>Customer ID: {checkoutObject.customer}.</li>
              <li>Status: {checkoutObject.payment_status}.</li>
              <li>Subtotal: {checkoutObject.amount_subtotal / 100}.</li>
              <li>
                You will receive an email confirmation/invoice at{" "}
                {checkoutObject?.customer_details?.email}.
              </li>
            </ul>
          <Link className="button postButton" to="/">Return to Shopping</Link>
            
          </div>
          <div className="column">
              <img className="postPurchasePhoto" src={photo} alt="happy shopper picture"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
