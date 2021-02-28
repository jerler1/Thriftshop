import React from 'react';
import {Link} from 'react-router-dom';

const AdminFooter = (props) => {
    return (
        <div className="card-footer admin-footer" id={props.key}>
            <a href="/" className="card-footer-item">Unlist</a>
            <Link to={`/admin/editItem/${props.item._id}`} className="card-footer-item">Edit</Link>
            <a href="/" className="card-footer-item">Remove</a>
        </div>
    );
};

export default AdminFooter;