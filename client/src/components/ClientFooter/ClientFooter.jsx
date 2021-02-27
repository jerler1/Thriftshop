import React from 'react';
import {Link} from "react-router-dom";
import {useCart} from "../../hooks/useCart";

const ClientFooter = (props) => {
    const cart = useCart();
    
    return (
        <div className="card-footer admin-footer" id={props.key}>
            <Link to={`/listing/${props.item._id}`} className="card-footer-item">See Details</Link>
            <Link to="/listing" className="card-footer-item" onClick={() => {
                cart.addToCart(props.item)
            }}>Add to Cart</Link>
            <Link to="/listing" className="card-footer-item">Reserve</Link>
        </div>
    );
};

export default ClientFooter;