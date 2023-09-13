import * as yup from 'yup';

export const CheckoutSchema = yup
  .object({
    currentPassword: yup.string().required('Please enter your current password'),
    newPassword: yup.string().required('Please enter your new password').min(6),
  })
  .required();