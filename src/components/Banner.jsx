import React from "react";
import banner1 from "../assets/banner1.png";
const Banner = ({ title, imgUrl }) => {
  return (
    <div className="banner">
      <img src={banner1} alt="artikart" width="100%" />
      <button className="shop-now-btn">Shop Colours</button>
    </div>
  );
};

export default Banner;
