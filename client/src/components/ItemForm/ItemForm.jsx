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
              <option value="Furniture">Furniture</option>
              <option value="Blender">Blender</option>
              <option value="Sofa">Sofa</option>
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
              <option value="Slightly Damaged">Slightly Damaged</option>
              <option value="Destroyed">Destroyed</option>
              <option value="Moderately Dinged">Moderately Dinged</option>
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
