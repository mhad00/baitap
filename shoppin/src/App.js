import Register from "./component/register/Register.js";
import "./App.css";
import Product from "./component/product/Product.js";
import React, { useState } from "react";

function App() {
  const item = [
    {
      brand: "a",
      name: "aaa",
      id: "a1",
      price: "1",
    },
    {
      brand: "b",
      name: "bbb",
      id: "b1",
      price: "2",
    },
    {
      brand: "c",
      name: "ccc",
      id: "c1",
      price: "3",
    },
  ];
  return (
    <div className="App">
      {item.map((itemData) => {
        return <Product {...itemData} />;
      })}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
