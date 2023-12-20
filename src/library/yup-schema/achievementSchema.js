import * as yup from 'yup';

export const AchievementSchema = yup
  .object({
    title: yup
      .string()
      .required('Title is required')
      .min(2, 'Title must be atleast 2 letters'),
    category: yup.string().required('Category is required'),
    date: yup.string().required('Date is required'),
    description: yup
      .string()
      .required('Description is required')
      .min(2, 'Description must be atleast 2 letters'),
  })
  .required();
