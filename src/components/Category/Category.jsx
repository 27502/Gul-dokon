// src/components/Category/Category.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import Filter from "../Filter/Filter";

const api = import.meta.env.VITE_API;

const Category = () => {
  const [products, setProducts] = useState([]);
  const getdata = async () => {
    const res = await axios.get(
      "https://green-shop-backend.onrender.com/api/flower/category/house-plants?access_token=6506e8bd6ec24be5de357927"
    );
    setProducts(res?.data?.data);
  };
  
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="category-container">
    <h2>All Plants</h2>
    <div className="content-wrapper">
      <Filter />
      <div className="product-section">
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.main_image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Category;
