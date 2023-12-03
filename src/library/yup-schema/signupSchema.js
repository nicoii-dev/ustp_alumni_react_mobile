import * as yup from 'yup';

export const signinSchema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Please enter your Email'),
    password: yup.string().required('Please enter your Password').min(6),
    confirmPassword: yup
      .string()
      .required('Please enter your Password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    position: yup.string().required('Position is required'),
    dob: yup.date().required('Date of birth is required'),
    status: yup.string().required('Status is required'),
  })
  .required();
