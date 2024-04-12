import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";
import axios from "axios";
import { API_URL } from "../http/api";

export const AuthUser = createAsyncThunk(
  "auth/User",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/refresh`, {
        withCredentials: true 
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.accessToken)
      );
      thunkAPI.dispatch(userActions.setUser(response.data.userid));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);