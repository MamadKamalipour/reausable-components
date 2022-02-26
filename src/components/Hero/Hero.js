import React from "react";
import styled from "styled-components";

const Hero = ({ children, background, overlayColor }) => {
  const HeroSection = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: ${(props) => `url(${background})`};
    background-size: cover;
    background-position: 50% 50%;
  `;
  const HeroSectionOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    color: #ffff;
    background-color: ${overlayColor};
  `;
  console.log("hero rendered");
  return (
    <HeroSection>
      <HeroSectionOverlay>{children}</HeroSectionOverlay>
    </HeroSection>
  );
};

export default Hero;
