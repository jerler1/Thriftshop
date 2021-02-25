import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import HomeGallery from "../../components/HomeGallery/HomeGallery";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <HomeGallery />
    </div>
  );
};

export default Home;
