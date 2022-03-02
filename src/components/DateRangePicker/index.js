import { RangeDatePicker } from "jalali-react-datepicker";
import "./index.scss";
const DateRangePicker = ({ onValueChange, value }) => {
  const onSubmitHandler = ({ start, end }) => {
    onValueChange({ start, end });
  };

  return (
    <div className="date-range-picker-wrapper">
      <RangeDatePicker
        fromLabel="از تاریخ"
        toLabel="تا تاریخ"
        start={value.start}
        end={value.end}
        onClickSubmitButton={onSubmitHandler}
      />
    </div>
  );
};

export default DateRangePicker;
