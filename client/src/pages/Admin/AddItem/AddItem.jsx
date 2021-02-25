import React, { useState } from "react";
import ItemForm from "../../../components/ItemForm/ItemForm";
import "./AddItem.css";
import API from "../../../api/index";


const AddItem = () => {
  const [imageSource, setImageSource] = useState(
    "http://res.cloudinary.com/thriftshopshop/image/upload/v1614196967/thriftshopshop/hzkbtocbzgzenprljfao.jpg"
  );
  const [formValues, setFormValues] = useState({
      name: "",
      category: "",
      price: "",
      condition: "",
      description: ""
  })

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

handleInputChange= event => {
    const { name, value } = event.target
    setFormValues({...formValues, [name]: value})
}

  handleFormSubmit = event => {
      event.preventDefault();      
  }

  return (
    <div>
      <section className="section">
        <h1>This is the add item.</h1>
      </section>
      <div className="columns center">
        <div className="column leftCol">
          <figure className="image center">
            <img src={imageSource} alt="placeholder" />
          </figure>
          <button className="center" onClick={widget.open}>
            Upload Image
          </button>
        </div>
        <div className="column">
          <ItemForm />
        </div>
      </div>
    </div>
  );
};

export default AddItem;
