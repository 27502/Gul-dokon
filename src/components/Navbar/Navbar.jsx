import React from "react";
import { Menu, Button, Badge, Input } from "antd";
import { ShoppingCartOutlined, SearchOutlined, LoginOutlined } from "@ant-design/icons";
import "./Navbar.css";
import logo from "../../assets/images/Group.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="navbar__center">
        <Menu mode="horizontal" selectable={false} items={[
            {
              key: "home",
              label: "Home",
            },
            {
              key: "shop",
              label: "Shop",
            },
          ]} />
      </div>

      <div className="navbar__right">
        <Input placeholder="Search" prefix={<SearchOutlined />} className="search-input" />
        <Badge count={0} showZero>
          <ShoppingCartOutlined className="icon" />
        </Badge>
        <Button icon={<LoginOutlined />} type="primary" className="login-btn">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
