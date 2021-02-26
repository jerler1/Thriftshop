import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemForm from "../../../components/ItemForm/ItemForm";
import "./EditItem.css";
import API from "../../../api/index";

const EditItem = () => {
  const { id } = useParams();
  const [imageSource, setImageSource] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    price: "",
    condition: "",
    description: "",
  });

//   useEffect(() => {
//     API.get;
//   }, []);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    API.addItemSubmit(formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="columns center columnsCustom">
        <div className="column leftCol">
          <figure className="imageCustom center">
            <img src={imageSource} alt="placeholder" />
          </figure>
          <button className="button is-info center" onClick={widget.open}>
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

export default EditItem;
