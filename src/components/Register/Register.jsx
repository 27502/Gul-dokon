// Register.jsx
import React, { useState } from "react";
import { Input, Button, message, Form } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        "https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927",
        {
            
          surname,
          password,
          email,
        }
      );
      message.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    } catch (error) {
      if (error.response?.status === 409) {
        message.error("Bu foydalanuvchi allaqachon mavjud.");
      } else {
        message.error("Serverda muammo yuz berdi.");
        console.log(error);
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Ro'yxatdan o'tish</h2>
      <Form onFinish={handleSignUp} className="register-form">
        <Form.Item
          label="Foydalanuvchi nomi"
          name="surname"
          rules={[{ required: true, message: "Iltimos, foydalanuvchi nomini kiriting!" }]}
        >
          <Input
            value={surname}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Foydalanuvchi nomi"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Iltimos, email manzilingizni kiriting!" }]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          label="Parol"
          name="password"
          rules={[{ required: true, message: "Iltimos, parolni kiriting!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parol"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-btn">
            Ro'yxatdan o'tish
          </Button>
        </Form.Item>
      </Form>

      <p className="login-link">
        Yoki <Link  to="/login">Kirish</Link>
      </p>
    </div>
  );
};

export default Register;
