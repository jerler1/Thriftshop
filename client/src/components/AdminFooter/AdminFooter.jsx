import React from 'react';

const AdminFooter = (props) => {
    return (
        <div className="card-footer admin-footer" id={props.key}>
            <a href="/" className="card-footer-item">Unlist</a>
            <a href="/" className="card-footer-item">Edit</a>
            <a href="/" className="card-footer-item">Remove</a>
        </div>
    );
};

export default AdminFooter;