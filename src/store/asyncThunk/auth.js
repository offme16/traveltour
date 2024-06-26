import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../const/actionTypes";
import axios from "axios";
import api, { API_URL } from "../http/api";

export const AuthUser = createAsyncThunk(
  "auth/User",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5092/api/User/RefreshToken`, {
        jwtToken: JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)),
        refreshToken: JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_REFRESH))
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.jwtToken)
      );
      localStorage.setItem(
        USER_LOCALSTORAGE_REFRESH,
        JSON.stringify(response.data.refreshToken)
      );
      thunkAPI.dispatch(userActions.setUser(response.data.userid));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);