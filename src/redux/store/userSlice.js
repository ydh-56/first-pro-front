import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  seq: "",
  userId: "",
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.seq = action.payload.USER_SEQ;
      state.userId = action.payload.USER_ID;
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.seq = "";
      state.userId = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
// Action Creator를 내보냅니다.
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice;
