import React, { useState } from "react";
import "./index.scss";
import CustomDropDown1 from "../CustomDropDown1/CustomDropDown1";
import CustomRadioButton2 from "../CustomRadioButton2/CustomRadioButton2";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import backgroundImage from "../../assets/image/ramsar.jpg";
import Hero from "../Hero/Hero";
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
  const [customDropDownValue, setCustomDropDownValue] = useState("");
  const [vilatype, setVilaType] = useState("");
  const [peopleNumValue, setPeopleNumValue] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ customDropDownValue, vilatype, peopleNumValue });
  };

  const onDropDownValueChange = (val) => {
    setCustomDropDownValue(val);
  };
  const onVilaTypeChange = (type) => {
    setVilaType(type);
  };
  const peopleNumValueChange = (num) => {
    setPeopleNumValue(num);
  };
  const [startDate, setStartDate] = useState(new Date);
  const [endDate, setEndDate] = useState(new Date);

  return (
    <>
      <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
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
            {/* Date */}
            <h5>تاریخ ورود</h5>
            <CustomDatePicker value={startDate} onValueChange={(e) => setStartDate(e)} />
            <h5>تاریخ خروج</h5>
            <CustomDatePicker value={endDate} onValueChange={(e) => setEndDate(e)} />
            {/* house type */}
            <CustomRadioButton2
              data={vilatypes}
              groupname="houseType"
              label="نوع اقامتگاه"
              value={vilatype}
              onValueChange={onVilaTypeChange}
              backgroundColor="red"
              borderColor="blue"
              boxShadow="0 0 0 0.25rem rgba(255, 0, 0, 0.281)"
              ActiveColor="#fff"
              onHoverBackground="red"
              onHoverColor="#fff"
            />
            {/* People */}
            <CustomRadioButton2
              data={peopleNum}
              groupname="people"
              label="تعداد نفرات"
              value={peopleNumValue}
              onValueChange={peopleNumValueChange}
              backgroundColor="red"
              borderColor="blue"
              boxShadow="0 0 0 0.25rem rgba(255, 0, 0, 0.281)"
              ActiveColor="#fff"
              onHoverBackground="red"
              onHoverColor="#fff"
            />
            <button type="submit">submit</button>
          </div>
        </form>
      </Hero>
    </>
  );
};

export default VilaFinder;
