import React from "react";
import cart from "../assets/cart1.svg";
import "../style/navbar.css";

const CartWidget = () => {
  return (
    <div className="div-cart">
      <span>(0)</span>
      <img src={cart} className="cart-img" alt="cart" />
    </div>
  );
};

export default CartWidget;
