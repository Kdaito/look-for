import * as yup from "yup";

export const requirementSchema = {
  imageFile: yup.mixed(),
  title: yup
    .string()
    .max(20, "20文字以下で入力してください")
    .required("タイトルを入力してください"),
  text: yup
    .string()
    .max(128, "128文字以下で入力してください")
    .required("募集内容を入力してください"),
  status: yup.number().required("ステータスを選択してください"),
  period: yup.object().shape(
    {
      startDate: yup
        .date()
        .required("開始日を入力してください")
        .typeError("開始日を正しい形式で入力してください")
        .when("endDate", {
          is: (val: Date) => val,
          then: yup
            .date()
            .required("開始日を入力してください")
            .typeError("開始日を正しい形式で入力してください")
            .max(yup.ref("endDate"), ""),
          otherwise: yup
            .date()
            .required("開始日を入力してください")
            .typeError("開始日を正しい形式で入力してください"),
        }),
      endDate: yup
        .date()
        .required("終了日を入力してください")
        .typeError("終了日を正しい形式で入力してください")
        .when("startDate", {
          is: (val: Date) => val,
          then: yup
            .date()
            .required("終了日を入力してください")
            .typeError("終了日を正しい形式で入力してください")
            .min(
              yup.ref("startDate"),
              "開始日と終了日を正しい順番で入力してください"
            ),
          otherwise: yup
            .date()
            .required("終了日を入力してください")
            .typeError("終了日を正しい形式で入力してください"),
        }),
    },
    [["startDate", "endDate"]]
  ),
  email: yup
    .string()
    .email("正しい形式で入力してください")
    .required("メールアドレスは必須です")
    .max(124, "124文字以下で入力してください"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,11}$/, "ハイフンなしで入力してください"),
  createdBy: yup.string(),
};
