import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userDefault } from "../../data/defaultValues";
import { UserData } from "../../data/type";

const UserSlice = createSlice({
  name: "auth",
  initialState: userDefault,
  reducers: {
    setUser(
      state: UserData,
      action: PayloadAction<Partial<UserData>>
    ): UserData {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetUser(): UserData {
      return {
        ...userDefault,
      };
    },
  },
});

export const { setUser, resetUser } = UserSlice.actions;
export default UserSlice.reducer;
