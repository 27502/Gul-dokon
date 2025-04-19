import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import AppFooter from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <HeroCarousel />
      <Category />
      <AppFooter />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}

    </>
  );
};

export default App;
