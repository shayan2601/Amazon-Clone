import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
