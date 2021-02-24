import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import GalleryContainer from "../../../components/GalleryContainer/GalleryContainer";
import api from "../../../api/index";
import "./Dashboard.css";

const Dashboard = (props) => {
  const auth = useAuth();

  // TODO: Use storefrontId from user object to make request.
  // Or should we populate the user object on login and then we don't need to make the request here?
  useEffect(() => {
    api
      .getStorefront("6036cfaaa025eec02d37be13")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return auth.user ? (
    <div className="container">
      <h2 className="title">Welcome back, {auth.user.username}</h2>
      <h3 className="subtitle">You currently have 8 items in your store.</h3>
      <GalleryContainer />
    </div>
  ) : (
    <Redirect to="/admin" />
  );
};

export default Dashboard;
