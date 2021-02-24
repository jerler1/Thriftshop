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
        setImageSource(result.info.url);
      }
    }
  );

  return (
    <div>
      <section className="section">
        <h1>This is the add item.</h1>
      </section>
      <div className="columns center">
        <div className="column has-background-warning-dark leftCol">
          <figure className="image center">
            <img src={imageSource} alt="placeholder" />
          </figure>
          <button className="center" onClick={widget.open}>
            Upload Image
          </button>
        </div>
        <div className="column has-background-danger-dark">
          <div class="field">
            <label class="label">Label</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g. Dresser" />
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <div className="select">
                <select name="category">
                  <option value="Select One">Select One</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Blender">Blender</option>
                  <option value="Sofa">Sofa</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g. $10" />
            </div>
          </div>
          <div class="field">
            <label class="label">Condition</label>
            <div class="control">
              <div className="select">
                <select name="category">
                  <option value="Select One">Select One</option>
                  <option value="Slightly Damaged">Slightly Damaged</option>
                  <option value="Destroyed">Destroyed</option>
                  <option value="Moderately Dinged">Moderately Dinged</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea is-primary"
                placeholder="Primary textarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
