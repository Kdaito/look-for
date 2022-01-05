import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, initialState } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(
      state: UserState,
      action: PayloadAction<Partial<UserState>>
    ): UserState {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetUser(): UserState {
      return {
        ...initialState,
      };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
