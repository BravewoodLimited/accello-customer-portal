import {React, useEffect, useState} from 'react'
import { FormHelperText, InputLabel,  MenuItem, Select, FormControl,InputAdornment, TextField, Checkbox } from '@mui/material';
import MuiPhoneNumber from 'mui-phone-number';
import Menu from '@mui/material/Menu';

// import { useCountries } from "use-react-countries";


import { BpIcon, BpCheckedIcon } from './CustomCheckbox'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';


function ProfileDatePickerInput(props) {
  const [selectedDate, setSelectedDate] = useState(null);


  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      
    }
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker 
          slotProps={{ textField: { variant: 'standard', } }} 
          sx={{ width: "100%" }} 
          value={selectedDate}
          onChange={_onChange}
        />
    </LocalizationProvider>
  )
}

function TextFieldInputAdornment(props) {
  return (
    <TextField
      {...props}
      id={`${props.idName}`}
      name={props.inputName}
      label={props.labelName}
      placeholder={props.placeholderName}
      type={props.inputType || 'text'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {props.startIcon}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {props.endIcon}
          </InputAdornment>
        )
      }}
      variant="standard"
      helperText={props.errorHelperText}
      error={props.errorText}
      fullWidth
    />
  )
}

function ProfileSelectField(props) {
  const { label, data } = props;

  return (
    <FormControl variant="standard" fullWidth >
      <InputLabel>{label}</InputLabel>
      <Select fullWidth >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function ProfileTextField(props) {
  return (
    <TextField
      {...props}
      id={`${props.idName}`}
      name={props.inputName}
      label={props.labelName}
      placeholder={props.placeholderName}
      type={props.inputType || 'text'}
      variant="standard"
      helperText={props.errorHelperText}
      error={props.errorText}
      fullWidth
    />
  )
}

function TextFieldInput(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      variant="standard"
      fullWidth
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
      {...field}
    />
  )
}

function PhoneFieldInput(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  // const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const data = []
  // const { name, flags, countryCallingCode } = countries[country];

  const open = Boolean(country);
  // const handleClick = (event) => {
  //   setCountry(event.currentTarget);
  // };
  const handleClose = () => {
    setCountry(null);
  };

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      variant="standard"
      fullWidth
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
      {...field}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <p>Hi, work on me</p>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={country}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  // maxHeight: countries[country].length * 4.5,
                  width: '20ch',
                },
              }}
            >
              {data.map(
                ({ name, flags, countryCallingCode }, index) => {
                  return (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountry(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name} <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                }
              )}
            </Menu>
          </InputAdornment>
        )
      }}
    />
  )
}

function DatePickerInput(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker 
          slotProps={{ textField: { variant: 'standard', } }} 
          sx={{ width: "100%" }} 
          {...field}
          {...props}
          value={selectedDate}
          onChange={_onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error} 
        />
    </LocalizationProvider>
  )
}



function CuCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}


function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError} variant="standard" fullWidth >
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''} fullWidth >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}


function PhoneNumberField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <MuiPhoneNumber 
      defaultCountry={'ng'}
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
      {...field}
      fullWidth  />
  );
}



SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

function SelectNoLabel(){

  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: 230, }}>
      <Select
        value={status}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ m: 3, minWidth: 120, borderRadius: 3 }}
      >
        <MenuItem value="">All Status</MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
      </Select>
    </FormControl>
    );
}

function SmallSelectField(){

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    );
}

function CustomDatePicker(){
  return (
    <DateRange
      editableDateInputs={true}
      // onChange={item => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      // ranges={state}
/>
    )

}





export { TextFieldInputAdornment, CuCheckbox, TextFieldInput, DatePickerInput, SelectField, PhoneNumberField, SelectNoLabel, CustomDatePicker, PhoneFieldInput, ProfileTextField, ProfileSelectField, ProfileDatePickerInput, SmallSelectField} 