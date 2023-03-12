const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLogin: false,
};

const AuthState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuth(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { isAuth, isUserId } = AuthState.actions;

export default AuthState;
