import React from "react";
import { Menu, Button, Badge, Input } from "antd";
import { ShoppingCartOutlined, SearchOutlined, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // useNavigate qo'shish
import "./Navbar.css";
import logo from "../../assets/images/Group.svg";

const Navbar = ({ onLoginClick, onRegisterClick }) => {
  const navigate = useNavigate(); // navigate xookini chaqirish

  // Home tugmasi bosilganda asosiy sahifaga o'tish
  const handleHomeClick = () => {
    navigate("/"); // asosiy sahifaga o'tish
  };

  // Login tugmasi bosilganda sahifaga o'tish
  const handleLoginClick = () => {
    navigate("/login"); // login sahifasiga o'tish
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="navbar__center">
        <Menu
          mode="horizontal"
          selectable={false}
          items={[
            {
              key: "home",
              label: (
                <a onClick={handleHomeClick}>Home</a> // Home tugmasi bosilganda asosiy sahifaga o'tadi
              ),
            },
            {
              key: "shop",
              label: "Shop",
            },
          ]}
        />
      </div>

      <div className="navbar__right">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="search-input"
        />
        <Badge count={0} showZero>
          <ShoppingCartOutlined className="icon" />
        </Badge>

        <Button
          onClick={handleLoginClick} // Login tugmasi bosilganda navigate ishlaydi
          icon={<LoginOutlined />}
          type="primary"
          className="login-btn"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
