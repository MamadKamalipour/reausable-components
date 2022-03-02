import React from "react";
import "./FlippableCard.scss";
const FlippableCard = ({
  frontIcon,
  frontTitle,
  frontDesc,
  backIcon,
  backTitle,
  backDesc,
  backgroundImage,
  backgroundImageOverlay,
  status, // top , center , bottom
}) => {
  return (
    <main id="flippableCard">
      <div
        className="card__inner"
        style={{
          backgroundImage: `url(${backgroundImage ? backgroundImage : null})`,
        }}
      >
        <div
          className="card__inner__overlay"
          style={{ backgroundColor: backgroundImageOverlay }}
        >
          <div className="divClass">
            <div className={`card__face card__face--front ${status}`}>
              <i className={frontIcon} />
              <h3> {frontTitle}</h3>
              <p>{frontDesc}</p>
            </div>
            <div className="card__face card__face--back">
              <h3> {backTitle}</h3>
              <p>{backDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default FlippableCard;
