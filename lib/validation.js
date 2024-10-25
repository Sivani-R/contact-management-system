import { object, string } from 'yup';

const contactSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: string().required(),
  address: string().required(),
  timezone: string().required(),
});

export const validateContact = (data) => {
  try {
    contactSchema.validateSync(data);
    return null;
  } catch (error) {
    return error.message;
  }
};
