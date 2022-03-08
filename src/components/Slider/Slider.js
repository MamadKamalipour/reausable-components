import React from "react";
import Carousel from "react-multi-carousel";

const Slider = ({ children, ...props }) => {
  return <Carousel {...props}>{children}</Carousel>;
};

export default Slider;
