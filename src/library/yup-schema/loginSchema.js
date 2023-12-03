import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('Please enter your Email')
      .email('Invalid email format'),
    password: yup.string().required('Please enter your Password'),
  })
  .required();
