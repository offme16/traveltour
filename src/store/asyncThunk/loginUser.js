import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";

export const loginUser = createAsyncThunk(
  "login/User",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post("https://localhost:7045/user/login", {
        username: authData.username,
        password: authData.password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.userid)
      );
      thunkAPI.dispatch(userActions.setUser(response.data.userid));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
