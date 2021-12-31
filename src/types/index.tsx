export type Post = {
  title: string;
  text: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
};

export type Option = {
  text: string;
  value: number | null;
};
