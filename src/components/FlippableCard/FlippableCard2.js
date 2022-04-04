import React from "react";
import "./FlippableCard2.scss";
import FlippableCard from "./FlippableCard";

const FlippableCard2 = ({title, desc, backTitle}) => {
  return (
    <main id="mainFlip">
        <div className="mainFlipWrapper">
      <div className="center">
        <div className="front-face">
          <div className="contents front">
            <p>{title}</p>
            <span>{desc}</span>
          </div>
        </div>
        <div className="back-face">
          <div className="contents back">
            <h2>{backTitle}</h2>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default FlippableCard2;
