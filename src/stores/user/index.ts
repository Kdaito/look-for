import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, UserStoreData } from "./types";

const UserSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(
      state: UserStoreData,
      action: PayloadAction<Partial<UserStoreData>>
    ): UserStoreData {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetUser(): UserStoreData {
      return {
        ...initialState,
      };
    },
  },
});

export const { setUser, resetUser } = UserSlice.actions;
export default UserSlice.reducer;
