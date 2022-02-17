import { Timestamp } from "firebase/firestore";

export const timestampToDate = (date: Timestamp | Date | null): Date | null => {
  if (!date) return null;
  if (Object.prototype.toString.call(date) === "[object Date]")
    return date as Date;
  return (date as Timestamp).toDate();
};

export const getStringDate = (date: Timestamp | Date | null): string => {
  const formatDate = timestampToDate(date);
  if (!formatDate) return "設定されていません";
  const year = formatDate.getFullYear();
  const month = formatDate.getDate();
  const day = formatDate.getDay();
  return `${year}年${month}月${day}日`;
};
