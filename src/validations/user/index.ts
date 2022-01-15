import * as yup from "yup";

export const userSchema = {
  firstName: yup.string().max(32, "32文字以下で入力してください"),
  firstNameKana: yup
    .string()
    .matches(/^[a-z]*$/, "小文字アルファベットで入力してください")
    .max(64, "64文字以下で入力してください"),
  lastName: yup.string().max(32, "32文字以下で入力してください"),
  lastNameKana: yup
    .string()
    .matches(/^[a-z]*$/, "小文字アルファベットで入力してください")
    .max(64, "64文字以下で入力してください"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,11}$/, "ハイフンなしで入力してください"),
};
