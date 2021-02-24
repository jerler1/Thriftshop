import React from "react";
import "./AddItem.css";
import { Image } from "cloudinary-react";

const AddItem = (props) => {

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "thriftshopshop",
      uploadPreset: "thriftshopshop",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );

  return (
    <div>
      <section className="section">
        <h1>This is the add item.</h1>
      </section>
      <div className="columns">
        <div className="column has-background-warning-dark">
          {/* Upload to cloudinary */}
          <button onClick={widget.open}>Upload an Image</button>
        </div>
        <div className="column has-background-danger-dark">{/* Form */}</div>
      </div>
    </div>
  );
};

export default AddItem;
