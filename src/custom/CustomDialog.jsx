import React from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function CustomDialog({ open, handleClose, children }) {


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            {children}
        </Dialog>
    )
}

export default CustomDialog
