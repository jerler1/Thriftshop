import React from 'react';
import {Link} from "react-router-dom";

const ClientFooter = (props) => {
    
    return (
        <div className="card-footer admin-footer" id={props.key}>
            <Link to={`/listing/${props.item._id}`} className="card-footer-item">See Details</Link>
            <Link to="/listing" className="card-footer-item">Add to Cart</Link>
            <Link to="/listing" className="card-footer-item">Reserve</Link>
        </div>
    );
};

export default ClientFooter;