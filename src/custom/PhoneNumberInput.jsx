import { forwardRef } from 'react'
import TextField from '@mui/material/TextField';

function PhoneNumberInput(props, ref) {
  return (
    <TextField
        {...props}
        // InputProps={{
        // className: classes.input
        // }}
        inputRef={ref}
        fullWidth
        size='small'
        label='Phone Number'
        variant='standard'
        name='phone'
    />
  )
}

export default forwardRef(PhoneNumberInput)