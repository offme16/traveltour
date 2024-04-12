import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";
import api from "../http/api";

export const logoutUser = createAsyncThunk(
  "logout/User",
  async (thunkAPI) => {
    try {
      const response = await api.post("/logout");
      if (!response.data) {
        throw new Error();
      }
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);