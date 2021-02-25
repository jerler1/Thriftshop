import React from 'react';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';
import "./Listing.css"

const Listing = (props) => {
    return (
        <div>
            <h1>Listings</h1>
            <GalleryContainer />
        </div>
    );
};

export default Listing;