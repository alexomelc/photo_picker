import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../redux/photos";

export const store = configureStore({
  reducer: {
    photoSlice: photoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
