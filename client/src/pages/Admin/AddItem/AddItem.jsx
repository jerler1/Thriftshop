import React, { useState, useEffect, useRef } from "react";
import ItemForm from "../../../components/ItemForm/ItemForm";
import "./AddItem.css";
import API from "../../../api/index";

const AddItem = () => {
  // This state holds an URL which populates the image.
  const [imageSource, setImageSource] = useState(
    "http://res.cloudinary.com/thriftshopshop/image/https://res.cloudinary.com/thriftshopshop/image/upload/v1614298348/thriftshopshop/ccsccl977ftngs5u7caw.jpg/v1614196967/thriftshopshop/hzkbtocbzgzenprljfao.jpg"
  );

  // This state holds the data that is coming from the form.
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    price: "",
    condition: "",
    description: "",
  });

  // Allows refering to the widget by the DOM.
  const widgetRef = useRef();

  // Loading the cloudinary widget at component mount.
  useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "thriftshopshop",
        uploadPreset: "thriftshopshop",
        sources: ["local", "url", "camera"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImageSource(result.info.url);
        }
      }
    );
  }, []);

  function handleClick() {
    widgetRef.current.open();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    API.addItemSubmit({ ...formValues, image: [imageSource] })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="columns center">
        <div className="column leftCol">
          <figure className="center mt-6 mr-4">
            <img src={imageSource} alt="placeholder" />
          </figure>
          <button className="button is-info center" onClick={handleClick}>
            Upload Image
          </button>
        </div>
        <div className="column rightCol">
          <ItemForm
            {...formValues}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AddItem;
