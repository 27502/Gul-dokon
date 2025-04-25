import React from "react";
import "./Navbar.css";
import { Menu, Button, Badge, Input, Dropdown } from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  LoginOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/userSlice";
import logo from "../../assets/images/Group.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menuItems = [
    {
      key: "logout",
      label: <span style={{ color: "red" }}>Log out</span>,
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

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
              label: <a onClick={() => navigate("/")}>Home</a>,
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

        {user ? (
          <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
            <Button icon={<UserOutlined />} className="login-btn">
              {user.name || user.email}
            </Button>
          </Dropdown>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            icon={<LoginOutlined />}
            type="primary"
            className="login-btn"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
