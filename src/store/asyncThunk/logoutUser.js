import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_ID, USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../const/actionTypes";
import api, { API_URL } from "../http/api";
import { userActions } from "../userSlice";

export const logoutUser = createAsyncThunk(
  "logout/User",
  async (thunkAPI) => {
    try {
      const userID = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID))
      const response = await api.post(`${API_URL}logout`, {
        userID
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.removeItem(USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH, USER_LOCALSTORAGE_ID);
      thunkAPI.dispatch(userActions.logout());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);