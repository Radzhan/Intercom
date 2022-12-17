import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../containers/Pasword/paswordSlice";

export const store = configureStore({
  reducer: {
    password: counterReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;