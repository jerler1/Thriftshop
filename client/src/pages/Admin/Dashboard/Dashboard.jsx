import React from 'react';
import GalleryContainer from "../../../components/GalleryContainer/GalleryContainer"
import "./Dashboard.css";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Admin dashboard</h1>
            <GalleryContainer />
        </div>
    );
};

export default Dashboard;
