import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';


const marks = [
    {
      value: 3,
      label: '3 Months',
    },
    {
      value: 24,
      label: '24 Months',
    }
];

const dashboardMarks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 12,
    label: '12',
  }
];

const salaryMarks = [
  {
    value: 50000,
    label: '50K',
  },
  {
    value: 50000000,
    label: '50M',
  }
];

function salaryValuetext(value) {
  return `${value}k`;
}

function salaryValueLabel(value) {
  const decPlaces = Math.pow(10, 0)
  var abbrev = ["k", "m"]
  for (var i = abbrev.length - 1; i >= 0; i--){
    var size = Math.pow(10,(i+1)*3);
    if(size <= value){
      value = Math.round(value*decPlaces/size)/decPlaces;

      if((value === 1000) && (i < abbrev.length -1)){
        value = 1;
        i++
      }
      value += abbrev[i];
      break
    }
  }
  // return `${value}k`;
  return value;
}


const CustomRangeSlider = styled(Slider)({
    color: 'black',
    height: 1,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 20,
      width: 34,
      backgroundColor: '#0065A7',
      borderRadius: '30px',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'transparent',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });


  const SalarySliderStyle = styled(Slider)(({ theme }) => ({
    color: '#D48305',
    height: 3,
    marginRight: '20px !important',
    marginLeft: 'auto !important',
    padding: '0 20px !important',
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      borderRadius: 4,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
    },
    '& .MuiSlider-valueLabelOpen': {
      backgroundColor: '#D48305',
    },
    '& .MuiSlider-track': {
      height: 20,
    },
    '& .MuiSlider-rail': {
      color: 'rgba(212, 131, 5, 0.1);',
      opacity: 0.5,
      height: 20,
      borderRadius: 4
    },
  }));

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
        </Tooltip>
    );
}

function SalarySlider(props){
  return (
    <SalarySliderStyle
      getAriaLabel={salaryValuetext}
      defaultValue={[10000000, 30000000]}
      marks={salaryMarks}
      valueLabelDisplay="on"
      min={50000}
      step={10000}
      max={50000000}
      valueLabelFormat={salaryValueLabel}
      {...props}
    />
    )
}



export {CustomRangeSlider, ValueLabelComponent, marks, dashboardMarks, SalarySlider}