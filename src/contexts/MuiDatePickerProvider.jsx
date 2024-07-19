import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

function MuiDatePickerProvider(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {props.children}
    </LocalizationProvider>
  );
}

export default MuiDatePickerProvider;
