import * as yup from "yup";

export const authSchema = {
  email: yup.string().email().required().max(128),
  password: yup.string().required(),
};
