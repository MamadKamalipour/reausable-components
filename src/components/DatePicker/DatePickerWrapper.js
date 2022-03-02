import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Datepicker,
  localeFa,
  jalaliCalendar,
  formatDate,
} from "@mobiscroll/react";
import "./DatePickerWrapper.scss";
function DatePickerWrapper() {
  const now = new Date();
  const min = now;

  return (
    <Datepicker
      inputComponent="input"
      inputProps={{
        placeholder: "انتخاب تاریخ",
      }}
      controls={["calendar"]}
      select="range"
      display="center"
      theme="ios"
      themeVariant="light"
      locale={localeFa}
      calendarSystem={jalaliCalendar}
      calendarType="month"
      pages={2}
      touchUi={true}
      rtl={true}
      min={min}
      rangeStartLabel="تاریخ رفت"
      rangeEndLabel="تاریخ برگشت"
    />
  );
}

export default DatePickerWrapper;
