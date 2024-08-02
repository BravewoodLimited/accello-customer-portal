import React from "react";
import { Modal, Box, Button } from "@mui/material";
import { PaystackButton } from "react-paystack";

const PaystackModal = ({ open, handleClose, amount, email }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack expects amount in kobo
    publicKey: "pk_test_0a0087ef35ffacc077d9e42446795d5088edce5d",
  };

  const onSuccess = (reference) => {
    console.log(reference);
    handleClose();
  };

  const onClose = () => {
    console.log("closed");
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <div className="flex justify-between items-center">
          <Button variant="contained" color="primary">
            <PaystackButton
              text="Pay with Paystack"
              className="paystack-button"
              callback={onSuccess}
              close={onClose}
              {...config}
            />
          </Button>
          <Button
            onClick={onClose}
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default PaystackModal;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
