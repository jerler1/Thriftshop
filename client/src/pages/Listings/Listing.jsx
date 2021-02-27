import React from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';
import "./Listing.css"

const Listing = (props) => {
    return (
        <div>
            {/* <h1>Listings</h1> */}
            <SearchBar />
            <GalleryContainer />
        </div>
    );
};

export default Listing;