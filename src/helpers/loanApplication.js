import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const loanApplicationValidation = yup.object({
    name: yup.string('Enter full name').required('Full name is required'),
    email: yup.string('Enter your email address').required('Email is required').email('Invalid email address'),
    phone_number: yup.string('Enter your phone number').required('Phone number is required').matches(phoneRegExp, 'Invalid phone number(e.g 08182093382)'),
    sector: yup.string('Select sector').required('Sector is required'),
    amount: yup.number('Enter amount').required('Amount is required').positive('Amount should be a number').integer('Amount should be a number'),
});


const loanApplication = {
    name: '',
    email: '',
    phone_number: '',
    sector: '',
    amount: '',
}

export { loanApplication, loanApplicationValidation }