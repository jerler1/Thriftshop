import React from "react";
import "./AddItem.css";

const AddItem = (props) => {
  return (
    <div>
      <section className="section">
          <h1>This is the add item.</h1>
      </section>
      <div className="columns">
        <div className="column has-background-warning-dark">
            {/* Upload to cloudinary */}
        </div>
        <div className="column has-background-danger-dark">
            {/* Form */}
        </div>
      </div>
    </div>
  );
};

export default AddItem;
