import "./product.css";
import React, { useState } from "react";

const Product = ({ brand }, { name }, { id }, { price }) => {
  const [sold, setSold] = useState(0);
  const onSoldHandle = () => {
    setSold(sold++);
  };

  return (
    <div className="productBack">
      <div className="product-img">
        <img src="./images/Product Photo.png" alt="" />
      </div>
      <h3>Brand: {brand}</h3>
      <h4>Name:{name}</h4>
      <h4>ID: {id}</h4>
      <h4>Price: {price}</h4>
      <h4>Sold: {sold}</h4>
      <button onClick={onSoldHandle}>Buy</button>
    </div>
  );
};

export default Product;
