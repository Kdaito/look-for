export type AuthState = {
  id: string;
  auth: boolean;
};

export const initialState: AuthState = {
  id: "",
  auth: false,
};
