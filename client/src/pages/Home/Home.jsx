import React from 'react';
import "./Home.css";
import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <GalleryContainer />
        </div>
    );
};

export default Home;