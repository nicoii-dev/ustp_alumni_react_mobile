import * as yup from 'yup';

export const EmploymentSchema = yup
  .object({
    type: yup.string().required('Employment type is required'),
    presentOccupation: yup.string().required('Present occupation is required'),
    lineOfBusiness: yup.string().required('Line of Business is required'),
    profession: yup.string().required('Profession is required'),
  })
  .required();
