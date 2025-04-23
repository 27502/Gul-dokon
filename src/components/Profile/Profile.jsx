import React from "react";
import { Menu, Button, Badge, Input, Dropdown } from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Group.svg";

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const navigate = useNavigate();

  const profileMenu = {
    items: [
      { key: "account", label: "Account Details" },
      { key: "products", label: "My Products" },
      { key: "address", label: "Address" },
      { key: "wishlist", label: "Wishlist" },
      { key: "track", label: "Track Order" },
      {
        key: "logout",
        label: (
          <span style={{ color: "red" }}>
            <LogoutOutlined /> Log out
          </span>
        ),
        onClick: onLogout,
      },
    ],
    onClick: ({ key }) => {
      if (key === "account") navigate("/profile");
      if (key === "logout") onLogout();
    },
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
            { key: "home", label: "Home" },
            { key: "shop", label: "Shop" },
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

        {user ? (
          <Dropdown menu={profileMenu} placement="bottomRight">
            <Button icon={<UserOutlined />} className="login-btn">
              {user.firstName}
            </Button>
          </Dropdown>
        ) : (
          <>
            <Button
              onClick={onLoginClick}
              icon={<LoginOutlined />}
              type="primary"
              className="login-btn"
            >
              Login
            </Button>
            <Button
              onClick={onRegisterClick}
              icon={<UserAddOutlined />}
              className="login-btn"
            >
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
