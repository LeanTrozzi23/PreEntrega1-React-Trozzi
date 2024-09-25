import React from "react";
import "../style/card.css";

const ItemListContainer = (props) => {
  return (
    <div className="card-container">
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <p>{props.price}</p>
    </div>
  );
};

export default ItemListContainer;
