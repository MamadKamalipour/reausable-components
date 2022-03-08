import React, { useState } from "react";
import momentJalaali from "moment-jalaali";
import moment from "moment";
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";
import { DateRangePicker } from "react-dates";
function DateRangePickerComponent() {
  moment.locale("fa");
  momentJalaali.loadPersian({
    dialect: "persian-modern",
    usePersianDigits: true,
  });
  const [dateState, setDateState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: null,
  });

  const onDatesChangeHandler = (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    setDateState({ ...dateState, startDate });
    setDateState({ ...dateState, endDate });
  };
  return (
    <DateRangePicker
      isRTL
      showClearDates={true}
      noBorder={true}
      startDate={dateState.startDate}
      startDateId="your_unique_start_date_id"
      endDate={dateState.endDate}
      endDateId="your_unique_end_date_id"
      onDatesChange={(startDate, endDate) =>
        onDatesChangeHandler(startDate, endDate)
      }
      focusedInput={dateState.focusedInput}
      onFocusChange={(focusedInput) =>
        setDateState({ ...dateState, focusedInput })
      }
      startDatePlaceholderText="تاریخ شروع"
      endDatePlaceholderText="تاریخ پایان"
      renderMonthText={(month) => momentJalaali(month).format("jMMMM jYYYY")}
      renderDayContents={(day) => momentJalaali(day).format("jD")}
    />
  );
}

export default DateRangePickerComponent;
