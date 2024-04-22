import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "./const/actionTypes";
const initialState = {
  userID: undefined,
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
      state.userID = undefined;
      state.isAuth = false;
    },
  },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
