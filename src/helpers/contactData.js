import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const contactValidation = yup.object({
    name: yup.string('Enter full name').required('Full name is required'),
    email: yup.string('Enter your email address').required('Email is required').email('Invalid email address'),
    phone_number: yup.string('Enter your phone number').required('Phone number is required').matches(phoneRegExp, 'Invalid phone number(e.g 08182093382)'),
    title: yup.string('Enter title of your message').required('Title is required'),
    message: yup.string('Enter message').required('Message is required'),
});

const contactData = {
    name: '',
    email: '',
    phone_number: '',
    title: '',
    message: '',
}
export { contactData, contactValidation }