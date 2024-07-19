import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { forwardRef } from "react";
import { TextField as MuiTextField } from "@mui/material";

const DatePicker = forwardRef(
  /**
   *
   * @param {import("@mui/x-date-pickers").DatePickerProps} props
   * @param {*} ref
   * @returns
   */
  function DatePicker(props, ref) {
    return (
      <MuiDatePicker
        ref={ref}
        {...props}
        slots={{ textField: TextField, ...props.slots }}
      />
    );
  }
);

export default DatePicker;

function TextField(props) {
  const { ownerState, ...restProps } = props;
  return <MuiTextField {...restProps} />;
}
