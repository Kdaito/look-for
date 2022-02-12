export type UserState = {
  id: string;
  auth: boolean;
};

export const initialState: UserState = {
  id: "",
  auth: false,
};
