// 投稿用のタイプ
export type Requirement = {
  title: string;
  text: string;
  status: number | null;
  period: {
    startDate: Date | null;
    endDate: Date | null;
  };
  email: string;
  phoneNumber: string;
  createdBy: string;
};

// オプションのオブジェクト用のタイプ(valueにnullなし)
export type OptionObject = {
  text: string;
  value: number;
};

// DB用のオプションタイプ(valueにnullあり)
export type Option = {
  text: string;
  value: number | null;
};

// 認証用のタイプ
export type Auth = {
  email: string;
  password: string;
};

// ユーザー情報用のタイプ
export type User = {
  firstName: string;
  firstNameKana: string;
  lastName: string;
  lastNameKana: string;
  phoneNumber: string;
};
