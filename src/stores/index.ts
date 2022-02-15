import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth";
import UserSlice from "./user";

const store = configureStore({
  reducer: { auth: AuthSlice, user: UserSlice },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
