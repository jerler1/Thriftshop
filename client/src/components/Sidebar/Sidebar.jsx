import React from 'react';
import "./Sidebar.css";

const Sidebar = (props) => {

    const categories = ["Art", "Clothing", "Electronics", "Entertainment", "Furniture", "Games/Toys", "Kitchenware", "Tools/Appliances"];

    return (
        <aside class="menu column is-2 thrift-sidebar">
          <p class="menu-label">Filter by Category!</p>
          <ul class="menu-list">
              <li>
                  <a onClick={props.allClick}>All Items</a>
              </li>
              {categories.map((category) => {
                  return (<li><a onClick={props.handleCatClick}>{category}</a></li>)
              })}
          </ul>
        </aside>
    );
};

export default Sidebar;