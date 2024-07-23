const StepperSx = {
    "& .MuiStepIcon-root ": {
        color: "transparent !important",
    },
    "& .Mui-active .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
        color: "transparent !important",
        border: "2px solid #04265F",
        borderRadius: "100%",
    },
    "& .Mui-completed .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
        color: "#04265F !important",
        borderRadius: "100%",
    },
    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
        border: "1px solid #E3E3E3",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
    },
    "& .Mui-active .css-117w1su-MuiStepIcon-text": {
        fill: "#04265F !important",
    },
    "& .css-117w1su-MuiStepIcon-text": {
        fill: "black !important",
    },
    "& .MuiStepConnector-line": {
        marginTop: "6px",
        // border: "1px solid #E3E3E3",
    },
    "& .Mui-completed .MuiStepConnector-line": {
        border: "1px solid #04265F !important"
    },
    "& .Mui-active .MuiStepConnector-line": {
        border: "1px solid #04265F !important"
    }
}

const StepperLabelSx = {
    "& .css-1hv8oq8-MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
        marginTop: "-55px !important",
        display: { xs: 'none', md: 'block' }
    },
    "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": {
        color: "#04265F !important",
    },

}


export {StepperSx, StepperLabelSx}

