import React, { useState } from "react";
import "./index.scss";
import CustomDropDown1 from "../CustomDropDown1/CustomDropDown1";
import CustomRadioButton1 from "../CustomRadioButton1/CustomRadioButton1";
import backgroundImage from "../../assets/image/ramsar.jpg";
import Hero from "../Hero/Hero";
// date imports
import "react-dates/initialize";
import moment from "moment";
import momentJalaali from "moment-jalaali";
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";

import DateRangePickerWrapper from "../DatePickerComp/dist/examples/DateRangePickerWrapper";
import "react-dates/lib/css/_datepicker.css";
import "../DatePickerComp/DatePickerComp.scss";
const vilatypes = [
  {
    id: "1",
    type: "ویلا",
    htmlId: "vila",
    value: "vila",
  },
  {
    id: "2",
    type: "آپارتمان",
    htmlId: "apartment",
    value: "apartment",
  },
  {
    id: "3",
    type: "سوئیت",
    htmlId: "soiit",
    value: "soiit",
  },
  {
    id: "4",
    type: "هتل",
    htmlId: "hotel",
    value: "hotel",
  },
];
const cities = [
  { value: "ramsar", label: "رامسر" },
  { value: "mahmood-abad", label: "محمود آباد" },
  { value: "tonekabon", label: "تنکابن" },
  { value: "chaboksar", label: "چابکسر" },
];
const peopleNum = [
  {
    id: "1",
    type: "4 نفر",
    htmlId: "4-people",
    value: "4",
  },
  {
    id: "2",
    type: "4 تا 8",
    htmlId: "4-8people",
    value: "4-8",
  },
  {
    id: "3",
    type: "8 به بالا",
    htmlId: "up-to-8",
    value: "up-to-8",
  },
];
const VilaFinder = () => {
  // states

  const [customDropDownValue, setCustomDropDownValue] = useState("");
  const [vilatype, setVilaType] = useState("");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
    focusedInput: null,
  });
  const [peopleNumValue, setPeopleNumValue] = useState("");

  // moment
  moment.locale("fa");
  momentJalaali.loadPersian({
    dialect: "persian-modern",
    usePersianDigits: true,
    
  });

  const DateChangeHandler = ({ startDate, endDate }) => {
    setDate({
      // ...date,
      startDate: startDate,
      endDate: endDate,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({customDropDownValue, vilatype, date, peopleNumValue})
  };

  const onDropDownValueChange = (val) => {
    console.log({ val });
    setCustomDropDownValue(val);
  };
  const onVilaTypeChange = (type) => {
    setVilaType(type);
  };
  const peopleNumValueChange = (num) => {
    setPeopleNumValue(num);
  };
  return (
    <>
      <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)" />
      <form onSubmit={onSubmitHandler} className="vilaFinder">
        <div className="vilaFinder__wrapper">
          {/* Location */}
          <CustomDropDown1
            data={cities}
            type="single"
            name="cities"
            label="انتخاب شهر"
            defaultValue={cities[0]}
            value={customDropDownValue}
            onValueChange={onDropDownValueChange}
          />
          {/* house type */}
          <CustomRadioButton1
            data={vilatypes}
            groupname="houseType"
            label="نوع اقامتگاه"
            mainColor={"rgb(192 192 192 / 89%)"}
            value={vilatype}
            onValueChange={onVilaTypeChange}
          />
          {/* date */}
          <DirectionProvider direction={DIRECTIONS.RTL}>
            <DateRangePickerWrapper
              DateChangeHandler={DateChangeHandler}
              isRTL={true}
              initialStartDate={date.startDate}
              initialEndDate={date.endDate}
              anchorDirection="right"
              showDefaultInputIcon
              hideKeyboardShortcutsPanel
              showClearDates
              stateDateWrapper={momentJalaali}
              startDatePlaceholderText="تاریخ شروع"
              endDatePlaceholderText="تاریخ پایان"
              renderMonthText={(month) =>
                momentJalaali(month).format("jMMMM jYYYY")
              }
              renderDayContents={(day) => momentJalaali(day).format("jD")}
            />
          </DirectionProvider>

          {/* People */}
          <CustomRadioButton1
            data={peopleNum}
            groupname="people"
            label="تعداد نفرات"
            mainColor={"rgb(192 192 192 / 89%)"}
            value={peopleNumValue}
            onValueChange={peopleNumValueChange}
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default VilaFinder;
