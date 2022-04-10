import React, { useState } from "react";
import "./VilaFeatuers.scss";
import { v4 } from "uuid";
import CustomModal from "../CustomModal/CustomModal";
const VilaFeatuers = ({vilaOptions}) => {
 
  return (
    <main id="mainVilaFeatuers">
      {/* heading */}
      <div className="vila-featuers-heading"> امکانات اقامتگاه</div>
      {/* options and icons */}
      <div className="vila-featuers-option container">
        <div className="vila-featuers">
          {vilaOptions.slice(0, 8).map((option) => {
            if (option.isValid) {
              return (
                <div
                key={v4()}
              >
                <span>{option.title}</span>
                <i className={option.icon}></i>
              </div>
              )
            }
          })}
          {vilaOptions.slice(0, 8).map((option) => {
            if (!option.isValid) {
              return (
                <div
                className={`${!option.isValid ? "vila-feature-isvalid" : ""}`}

                key={v4()}
              >
                <span>{option.title}</span>
                <i className={option.icon}></i>
              </div>
              )
            }
          })}
        </div>
      </div>
      {/* button */}
      <CustomModal data={vilaOptions} />
    </main>
  );
};

export default VilaFeatuers;
