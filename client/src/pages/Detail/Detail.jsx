import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useCart} from "../../hooks/useCart";
import api from "../../api/index";
import ItemCard from "../../components/ItemCard/ItemCard";
import ClientFooter from "../../components/ClientFooter/ClientFooter";
import "./Detail.css";

const Detail = (props) => {
  const [item, setItem] = useState({});
  const [invItems, setInvItems] = useState([]);
  const [store, setStore] = useState({});
  const { id } = useParams();
  const cart = useCart();
  

  useEffect(() => {
    function loadItem() {
      api
        .getItem(id)
        .then((res) => setItem(res))
        .catch((err) => console.log(err));
    };
    function loadInventory() {
      api
        .getInventory()
        .then((res) => {
          setInvItems(res.data.filter((item) => item._id !== id).slice(0, 4));
        })
        .catch((err) => console.log(err));
    };
    

    loadItem();
    loadInventory();
    
  }, [id]);

  useEffect(() => {
    function loadStore() {
      console.log(item.storefront)
      api.getStorefront(item.storefront).then((res) => 
          setStore(res)
        ).catch((err) => console.log(err))
    };
    if (item.storefront !== undefined) {loadStore()}
  }, [item])

  



  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <figure className="image is-4by3">
                  <img src={`${item.image}`} alt="" />
                </figure>
              </article>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              <p className="title">{item.name}</p>
              <p className="subtitle">{item.category}</p>
              <div className="content">
                <p>
                  Longer description of the item: {item.description}
                </p>
                <h3>Price: ${item.price}</h3>
                <h3>Condition: {item.condition}</h3>
                <br />
                {/* <button className="button">Hold Item</button> */}
                <button className="button" onClick={() => {
                  if (!cart.showCart) cart.toggleShowCart();
                  cart.addToCart(item);
                }}>Add to Cart!</button>
                <br />
                <br />
                <Link to="/listing" className="button">
                  Back to gallery
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        {invItems.map(invItem => {
            return (
                  <ItemCard key={invItem._id} item={invItem}><ClientFooter item={invItem}/></ItemCard>
          )
        })}
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">{store.name}</p>
            <p className="subtitle">{store.address1}&nbsp;{store.city}&nbsp;{store.state}&nbsp;{store.zip}<br/>{store.phone}</p>
            
            <div className="content"></div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Detail;
