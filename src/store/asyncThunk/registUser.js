import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";
import api from "../http/api";

export const registUser = createAsyncThunk(
  "regist/User",
  async (authData, thunkAPI) => {
    try {
      const response = await api.post("/signup", {
        username: authData.username,
        lastname: authData.lastname,
        email: authData.email,
        password: authData.password,
      });

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.accesToken)
      );
      thunkAPI.dispatch(userActions.setUser(response.data.userId));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
