const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLogin: false,
};

const GlobalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    isAuth(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { isAuth } = GlobalState.actions;

export default GlobalState;
