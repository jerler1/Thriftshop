import React from "react";

const ItemForm = (props) => {
  return (
    <div>
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
  );
};

export default ItemForm;
