import React from "react";
import { Routes, Route } from "react-router-dom"; // faqat Routes va Route
import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import AppFooter from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <Category />
              <AppFooter />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
