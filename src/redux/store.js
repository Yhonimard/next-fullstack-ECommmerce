import { configureStore } from "@reduxjs/toolkit";
import GlobalState from "./GlobalState";

const store = configureStore({
  reducer: {
    [GlobalState.name]: GlobalState.reducer,
  },
});

export default store;
