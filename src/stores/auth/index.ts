import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, initialState } from "./types";

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>
    ): AuthState {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetAuth(): AuthState {
      return {
        ...initialState,
      };
    },
  },
});

export const { setAuth, resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
