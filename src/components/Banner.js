import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="gradient" />
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" />
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" />
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" />
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" />
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
