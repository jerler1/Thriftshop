import React from 'react';
import {Link} from "react-router-dom";

const ClientFooter = () => {
    return (
        <div className="card-footer admin-footer">
            <Link to="/listing/:id" className="card-footer-item">See Details</Link>
            <Link to="/" className="card-footer-item">Add to Cart</Link>
            <Link to="/" className="card-footer-item">Reserve</Link>
        </div>
    );
};

export default ClientFooter;