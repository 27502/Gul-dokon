import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slider, Button, Typography } from "antd";
import "./Filter.css";

const { Title, Text } = Typography;

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    axios
      .get("https://green-shop-backend.onrender.com/api/flower/category?access_token=6506e8bd6ec24be5de357927")
      .then((res) => {
         // API javobini tekshirish
        setCategories(res.data.data); // `data` ichidagi arrayni olish
      })
      .catch((err) => {
        console.error("Kategoriya API xatosi:", err);
      });
  }, []);


  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="filter-sidebar">
      <Title level={5}>Categories</Title>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {categories.map((cat) => (
          <li key={cat._id} style={{ marginBottom: "6px", cursor: "pointer" }}>
            <Text strong>{cat.title}</Text>{" "}
            <Text type="secondary">({cat.count})</Text>
          </li>
        ))}
      </ul>

      <Title level={5}>Price Range</Title>
      <Slider
        range
        min={0}
        max={1000}
        defaultValue={priceRange}
        onChange={handleSliderChange}
      />
      <Text style={{ color: "#46A358" }}>
        Price: {priceRange[0]}$ - {priceRange[1]}$
      </Text>

      <div style={{ marginTop: 16 }}>
        <Button type="primary" block style={{ backgroundColor: "#46A358" }}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Filter;
