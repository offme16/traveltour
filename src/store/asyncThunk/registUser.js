import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";
import api from "../http/api";

export const registUser = createAsyncThunk(
  "regist/User",
  async (authData, thunkAPI) => {
    try {
      const response = await api.post("Auth/Register", {
        UserName: authData.username,
        //email: authData.email,
        Password: authData.password,
      });

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
