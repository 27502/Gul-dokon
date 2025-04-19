import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-sidebar">
      <h3>Categories</h3>
      <ul>
        <li><input type="checkbox" /> House Plants</li>
        <li><input type="checkbox" /> Office Plants</li>
        <li><input type="checkbox" /> New Arrivals</li>
        <li><input type="checkbox" /> Sale</li>
      </ul>

      <h3>Price Range</h3>
      <input type="range" min="0" max="1000" />

      <h3>Sort By</h3>
      <select>
        <option value="default">Default Sorting</option>
        <option value="price_low">Price Low to High</option>
        <option value="price_high">Price High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
