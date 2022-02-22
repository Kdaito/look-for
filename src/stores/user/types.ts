import { userDefault } from "../../data/defaultValues";
import { UserData } from "../../data/type";

export type UserStoreData = UserData & {
  iconURL: string;
};

export const initialState: UserStoreData = {
  ...userDefault,
  iconURL: "",
};
