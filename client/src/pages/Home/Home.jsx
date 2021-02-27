import React from "react";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import HomeGallery from "../../components/HomeGallery/HomeGallery";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <HomeGallery />
    </div>
  );
};

export default Home;
