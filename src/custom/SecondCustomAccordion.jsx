import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        backgroundColor: 'white',
        color: 'black',
        fontStyle: 'font-NexaBold',
        borderRadius: 0,
        '&:not(:last-child)': {
            borderBottom: '1px solid #F9F9FB',
        },
        '&:before': {
            display: 'none',
        },
        '&:hover': {
          backgroundColor: '#04265F',
          color: 'white',
          borderRadius: 10,
        },
        "&:hover .MuiAccordionSummary-expandIconWrapper": {
          color: 'white',
        }
    }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }}  />}
    {...props}
  />
    ))(({ theme }) => ({
        // color: 'black',
        flexDirection: 'row',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    // '&:hover ': {
    //   backgroundColor: '#04265F',
    //   color: 'white'
    // }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  fontStyle: 'font-NexaLight',
  marginLeft: '20px',
  marginRight: '20px',
}));

export {Accordion, AccordionSummary, AccordionDetails}