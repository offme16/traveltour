import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../const/actionTypes";
import api, { API_URL } from "../http/api";
import { userActions } from "../userSlice";

export const logoutUser = createAsyncThunk(
  "logout/User",
  async (thunkAPI) => {
    try {
      const response = await api.post(`${API_URL}logout`);
      if (!response.data) {
        throw new Error();
      }
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      localStorage.removeItem(USER_LOCALSTORAGE_REFRESH);
      thunkAPI.dispatch(userActions.logout());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);