import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import ItemForm from "../../../components/ItemForm/ItemForm";
import "./EditItem.css";
import API from "../../../api/index";

const EditItem = () => {
  // Making the id from the URL available.
  const { id } = useParams();
  const auth = useAuth();
  let history = useHistory();

  // Making the states empty slate for when the edittable item data comes in.
  const [formValues, setFormValues] = useState({
    imageSource: "",
    storefront: "",
    name: "",
    category: "",
    price: "",
    condition: "",
    description: "",
  });

  const widgetRef = useRef();

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
          setFormValues((currentValues) => {
            return { ...currentValues, imageSource: result.info.url };
          });
        }
      }
    );
    API.getItem(id)
      .then((retrievedItem) => {
        console.log(retrievedItem);
        setFormValues((currentValues) => {
          return {
            ...currentValues,
            imageSource: retrievedItem.image[0],
            name: retrievedItem.name,
            category: retrievedItem.category,
            price: retrievedItem.price,
            condition: retrievedItem.condition,
            description: retrievedItem.description,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
    API.editItem(id, { ...formValues, storefront: auth.user.storefront })
      .then((res) => {
        console.log(res);
        history.push("/admin/dashboard");
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
            <img src={formValues.imageSource} alt="placeholder" />
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

export default EditItem;
