import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api/index";

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
  }, []);
  console.log(checkoutObject);
  return (
    <div>
      <h1>Thank you for your purchase.</h1>
    </div>
  );
};

export default Success;
