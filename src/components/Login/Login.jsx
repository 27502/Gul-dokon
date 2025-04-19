import { useState } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://green-shop-backend.onrender.com/api/user/sign-in?access_token=6506e8bd6ec24be5de357927",
        values
      );
      message.success("Tizimga muvaffaqiyatli kirildi!");
      // Bu yerda token saqlashing mumkin
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      message.error("Kirishda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{ maxWidth: 400, margin: "50px auto", padding: 24, border: "1px solid #f0f0f0", borderRadius: 10 }}>
      <Title level={3} style={{ textAlign: "center" }}>
        Login
      </Title>

      <Form layout="vertical" onFinish={handleLogin}>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: "Emailni kiriting!" }]}>
          <Input placeholder="Email kiriting" />
        </Form.Item>

        <Form.Item name="password" label="Parol" rules={[{ required: true, message: "Parolni kiriting!" }]}>
          <Input.Password placeholder="Parol kiriting" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Kirish
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Text>Akkauntingiz yo‘qmi? </Text>
          <Link to="/register">Ro'yxatdan o'tish</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
