import * as yup from "yup";

export const authSchema = {
  email: yup
    .string()
    .email("正しい形式で入力してください")
    .required("メールアドレスは必須です")
    .max(124, "124文字以下で入力してください"),
  password: yup
    .string()
    .required("パスワードは必須です")
    .matches(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      "半角英数字をそれぞれ1文字以上含む8文字以上100文字以下で入力してください"
    ),
};
