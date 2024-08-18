import { Modal, Box, Typography, Button } from '@mui/material';

const AccountDetailsModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" component="h2">
          Account Details
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Bank: Your Bank Name
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Account Number: 1234567890
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Account Name: Your Account Name
        </Typography>
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default AccountDetailsModal;

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
