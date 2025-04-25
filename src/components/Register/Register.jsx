import { useState } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927",
        values
      );

      const userData = res.data.user;
      const token = res.data.token;

      // Reduxga va localStorage'ga yozish
      dispatch(login({ user: userData, token }));

      message.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate("/");
    } catch (error) {
      console.error(error);
      message.error("Ro'yxatdan o'tishda xatolik!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="register-container"
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 24,
        border: "1px solid #f0f0f0",
        borderRadius: 10,
      }}
    >
      <Title level={3} style={{ textAlign: "center" }}>
        Ro'yxatdan o'tish
      </Title>

      <Form layout="vertical" onFinish={handleRegister}>
        <Form.Item
          name="name"
          label="Ism"
          rules={[{ required: true, message: "Ismingizni kiriting!" }]}
        >
          <Input placeholder="Ism kiriting" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Emailni kiriting!" },
            { type: "email", message: "Email noto‘g‘ri!" },
          ]}
        >
          <Input placeholder="Email kiriting" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Parol"
          rules={[{ required: true, message: "Parolni kiriting!" }]}
        >
          <Input.Password placeholder="Parol kiriting" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Ro‘yxatdan o‘tish
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Text>Allaqachon akkauntingiz bormi? </Text>
          <Link to="/login">Kirish</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
