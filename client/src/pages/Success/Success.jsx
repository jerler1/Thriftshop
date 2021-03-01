import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/index";

const Success = () => {
  const [checkoutObject, setCheckoutObject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.getCheckOutObject(id).then((sessionObject) =>
      setCheckoutObject(sessionObject).catch((err) => {
        console.log(err);
      })
    );
  }, []);
  return <div>{checkoutObject}</div>;
};

export default Success;
