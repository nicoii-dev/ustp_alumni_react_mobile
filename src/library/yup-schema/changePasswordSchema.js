import * as yup from 'yup';

export const changePasswordSchema = yup
  .object({
    currentPassword: yup.string().required('Please enter your current password'),
    newPassword: yup.string().required('Please enter your new password').min(6),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
  })
  .required();