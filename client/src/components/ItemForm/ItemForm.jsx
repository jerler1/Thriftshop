import React from "react";

const ItemForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="field">
        <label className="label">Item Name</label>
        <div className="control">
          <input
            onChange={props.handleInputChange}
            className="input formInput"
            type="text"
            placeholder="e.g. Dresser"
            name="name"
            value={props.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Category</label>
        <div className="control">
          <div className="select">
            <select
              name="category"
              value={props.category}
              onChange={props.handleInputChange}
            >
              <option value="Select One">Select One</option>
              <option value="Art">Art</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Games/Toys">Games/Toys</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Kitchenware">Kitchenware</option>
              <option value="Media">Media</option>
              <option value="Tools/Appliances">Tools/Appliances</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            onChange={props.handleInputChange}
            className="input formInput"
            type="text"
            placeholder="e.g. 10.50"
            name="price"
            value={props.price}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Condition</label>
        <div className="control">
          <div className="select">
            <select
              name="condition"
              value={props.condition}
              onChange={props.handleInputChange}
            >
              <option value="Select One">Select One</option>
              <option value="Brand New">Brand New</option>
              <option value="Like New">Like New</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Acceptable">Acceptable</option>
              <option value="Not Functioning/Just for Parts">Not Functioning/Just for Parts</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            onChange={props.handleInputChange}
            className="textarea is-primary"
            id="formInput"
            placeholder="Primary textarea"
            name="description"
            value={props.description}
          ></textarea>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ItemForm;
