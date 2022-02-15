export type AuthState = {
  id: string;
  email: string;
  auth: boolean;
};

export const initialState: AuthState = {
  id: "",
  email: "",
  auth: false,
};
