import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "./const/actionTypes";
const initialState = {
  userID: null,
  isAuth: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userID = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.userID = null;
      state.isAuth = false;
    },
  },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
