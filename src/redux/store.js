import { configureStore } from "@reduxjs/toolkit";
import AuthState from "./AuthState";

const store = configureStore({
  reducer: {
    [AuthState.name]: AuthState.reducer,
  },
});

export default store;
