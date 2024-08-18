import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const PaymentOptionModal = ({ open, handleClose, handlePaystack, handleAccount }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="payment-option-modal-title"
      aria-describedby="payment-option-modal-description"
    >
      <Box sx={style}>
        <Typography id="payment-option-modal-title" variant="h6" component="h2">
          Choose Payment Method
        </Typography>
        <Typography id="payment-option-modal-description" sx={{ mt: 2 }}>
          How would you like to proceed with your payment?
        </Typography>
        {/* <Button onClick={handlePaystack} sx={{ mt: 2, mr: 2 }} variant="contained" color="primary">
          Paystack
        </Button> */}
        <Button onClick={handleAccount} sx={{ mt: 2 }} variant="contained" color="secondary">
          Direct to Account
        </Button>
      </Box>
    </Modal>
  );
};

export default PaymentOptionModal;
