import React, { useState } from 'react'
import { RiNotification4Line } from "react-icons/ri";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonalLoanImage from '../assets/Dashboard/personal_loan.png'
// import EducationLoanImage from '../../assets/Dashboard/education_loan.png'
// import BusinessLoanImage from '../../assets/Dashboard/business_loan.png'


function Notification() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
    
        <button className='text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100' onClick={handleClick}>
            <RiNotification4Line className='h-11 w-11 p-2'/>
        </button>

        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  left: {lg: '1127px !important', sm: '300px !important'},
                  borderRadius: '21px',
                  padding: '15px',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    // right: 14,
                    right: {lg: '50% !important', sm: '20px !important'},
                    width: 18,
                    height: 18,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
            <p className='ml-3 text-xl font-bold mb-2'>Notifications</p>
            <MenuItem onClick={handleClose} className='flex gap-4 items-center font-NexaLight'>
                <img src={PersonalLoanImage} alt="" />
                <p className='pr-10 font-NexaBold '>Your personal loan request has been approved. <br /><span className='font-NexaLight my-4'>Your account has been credited with  ₦100,000</span><br /><span className='font-NexaLight text-sm'>2 days ago</span></p>
            </MenuItem>
            
        </Menu>
    </>

    
  )
}

export default Notification
