// 投稿用のタイプ
export type Post = {
  title: string;
  text: string;
  status: number | null;
  startDate: Date;
  endDate: Date;
  email: string;
  phoneNumber: number;
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
}
