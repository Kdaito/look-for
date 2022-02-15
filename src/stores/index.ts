import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth";

const store = configureStore({
  reducer: { user: userSlice },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
