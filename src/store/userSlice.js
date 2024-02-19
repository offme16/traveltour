import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "./const/actionTypes";
const initialState = {
  userID: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userID = action.payload;
    },
    initAuthData: (state, action) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.userID = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.userID = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
