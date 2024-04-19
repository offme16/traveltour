import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../const/actionTypes";
import api from "../http/api";

export const loginUser = createAsyncThunk(
  "login/User",
  async (authData, thunkAPI) => {
    try {
      const response = await api.post("api/Auth/Login", {
        userName: authData.username,
        password: authData.password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.jwt)
      );
      localStorage.setItem(
        USER_LOCALSTORAGE_REFRESH,
        JSON.stringify(response.data.refresh)
      );
      console.log(response.data.currentUser);
      thunkAPI.dispatch(userActions.setUser(response.data.currentUser));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
