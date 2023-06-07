import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/slices/appSlice";

const store = configureStore({
  reducer: appReducer
});

export default store;
