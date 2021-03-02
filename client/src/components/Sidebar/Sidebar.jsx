import React, {useState} from 'react';
import "./Sidebar.css";

const Sidebar = (props) => {

    const categories = ["Art", "Clothing", "Electronics", "Entertainment", "Furniture", "Games/Toys", "Kitchenware", "Tools/Appliances"];
    const [isActive, setIsActive] = useState(false);
    const setActive = () => {
        setIsActive(!isActive);
    };

    return (
        <aside className="menu column is-2 thrift-sidebar">
          <p className="menu-label has-text-centered">Filter by Category! {isActive ? <i onClick={setActive} className="far fa-caret-square-down drop-caret"></i> : <i onClick={setActive} className="far fa-caret-square-up drop-caret"></i>}</p>
          <ul className={isActive ? "menu-list mobile-list" : "menu-list"}>
              <li>
                  <button className="button side-buttons" onClick={props.allClick}>All Items</button>
              </li>
              {categories.map((category, index) => {
                  return (<li key={index}><button className="button side-buttons" name={category} onClick={props.handleCatClick}>{category}</button></li>)
              })}
          </ul>
        </aside>
    );
};

export default Sidebar;