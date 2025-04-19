import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Filter from "./components/Filter/Filter";
import Category from "./components/Category/Category";
import AppFooter from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />

      <div style={{ display: "flex", gap: "24px", padding: "20px" }}>
        <Filter />
        <Category />
      </div>

      <AppFooter />
    </>
  );
};

export default App;
