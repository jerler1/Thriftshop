import React from "react";

const ItemForm = (props) => {
  return (
    <div>
      <div className="field">
        <label className="label">Item Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g. Dresser" />
        </div>
      </div>
      <div className="field">
        <label className="label">Category</label>
        <div className="control">
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
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g. $10" />
        </div>
      </div>
      <div className="field">
        <label className="label">Condition</label>
        <div className="control">
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
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea is-primary"
            placeholder="Primary textarea"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
