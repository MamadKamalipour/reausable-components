import { map } from "jquery";
import React from "react";
import "./VilaFeatuers.scss";
import { v4 } from "uuid";
const VilaFeatuers = () => {
  const options = [
    {
      isValid: true,
      title: "حمام",
      icon: "fa-solid fa-shower",
    },
    {
      isValid: true,
      title: "گاز",
      icon: "fa-solid fa-fire-flame-simple",
    },
    {
      isValid: true,
      title: "آب",
      icon: "fa-solid fa-faucet-drip",
    },
    {
      isValid: true,
      title: "مبلمان",
      icon: "fa-solid fa-couch",
    },
    {
      isValid: true,
      title: "سرویس بهداشتی",
      icon: "fa-solid fa-toilet-paper",
    },
    {
      isValid: true,
      title: "کولر",
      icon: "fa-solid fa-air-conditioner",
    },
    {
      isValid: false,
      title: "پارکینگ",
      icon: "fa-solid fa-square-parking",
    },
    {
      isValid: true,
      title: "برق",
      icon: "fa-solid fa-plug",
    },
  ];
  return (
    <main id="mainVilaFeatuers">
      {/* heading */}
      <div className="vila-featuers-heading"> امکانات اقامتگاه</div>
      {/* options and icons */}
      <div className="vila-featuers-option container">
        <div className="vila-featuers">
          {options.map((option) => {
            return (
              <div
              className={`${!option.isValid? "vila-feature-isvalid": ""}`}
                key={v4()}

                
              >
                <span>{option.title}</span>
                <i class={option.icon}></i>
              </div>
            );
          })}
        </div>
      </div>
      {/* button */}
      <div>
        <button className="vila-featuers-button" type="submit">
          مشاهده همه امکانات
        </button>
      </div>
    </main>
  );
};

export default VilaFeatuers;
