/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const setupDetailsSchema = yup
  .object({
    dob: yup.string().required('Date of birth is required'),
    civilStatus: yup.string().required('Civil Status is required'),
  })
  .required();
