import React from 'react';

const Sidebar = (props) => {
    return (
        <aside class="menu column is-2 thrift-sidebar">
          <p class="menu-label">Filter by Category!</p>
          <ul class="menu-list">
            <li>
              <a onClick={props.handleCatClick}>Art</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Clothing</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Electronics</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Entertainment</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Furniture</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Games/Toys</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Kitchenware</a>
            </li>
            <li>
              <a onClick={props.handleCatClick}>Tools/Appliances</a>
            </li>
          </ul>
        </aside>
    );
};

export default Sidebar;