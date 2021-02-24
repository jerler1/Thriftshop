import React, { useState } from "react";
import "./AddItem.css";
// import { Image } from "cloudinary-react";

const AddItem = (props) => {
  const [imageSource, setImageSource] = useState(
    "http://res.cloudinary.com/thriftshopshop/image/upload/v1614196967/thriftshopshop/hzkbtocbzgzenprljfao.jpg"
  );

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "thriftshopshop",
      uploadPreset: "thriftshopshop",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        setImageSource(result.info.url)
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
          <figure className="image is-1by1">
            <img src={imageSource} alt="placeholder"/>
          </figure>
          <button onClick={widget.open}>Upload Image</button>
        </div>
        <div className="column has-background-danger-dark">{/* Form */}</div>
      </div>
    </div>
  );
};

export default AddItem;
