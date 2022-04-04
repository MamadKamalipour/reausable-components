/* eslint-disable array-callback-return */
/* eslint-disable no-extend-native */
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import "react-multi-date-picker/styles/layouts/mobile.css"
import "./CustomDatePicker.scss";
function CustomDatePicker() {
  const normalDayPrice = 1500;
  const fridayPrice = 2000;
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  String.prototype.toFaDigit = function () {
    return this.replace(/\d+/g, function (digit) {
      var ret = "";
      for (var i = 0, len = digit.length; i < len; i++) {
        ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
      }
      return ret;
    });
  };
  const bookedDays = ["1401/01/15", "1401/01/20", "1401/01/18", "1401/01/25"];
  const newBookedDays = [];
  bookedDays.map((day) => {
    newBookedDays.push(day.toFaDigit());
  });

  return (
    <DatePicker
    
      weekDays={weekDays}
      calendar={persian}
      locale={persian_fa}
      calendarPosition={"bottom"}
      plugins={[weekends()]}
      mapDays={({ date }) => {
        let isWeekend = date.weekDay.index === 6;
        let isBooked = newBookedDays.includes(date.format("YYYY/MM/DD"));

        if (isBooked)
          return {
            disabled: true,
            style: { color: "#ccc" },
            onClick: () => alert("این تاریخ رزرو شده است"),
            children: (
              <buatton
                data-toggle="tooltip"
                data-placement="top"
                title="این تاریخ رزرو شده است"
              >
                <div className="custom-day-wrapper">
                  <p className="custom-day">{date.format("D")}</p>
                  <small className="custom-day">رزرو شده</small>
                </div>
              </buatton>
            ),
          };

        return {
          children: (
            <>
              <div className="custom-day-wrapper">
                <p className="custom-day">{date.format("D")}</p>
                <small className="custom-day-price">
                  {isWeekend
                    ? fridayPrice.toLocaleString()
                    : normalDayPrice.toLocaleString()}
                </small>
              </div>
            </>
          ),
        };
      }}
      hideYear
      disableYearPicker
    />
  );
}

export default CustomDatePicker;