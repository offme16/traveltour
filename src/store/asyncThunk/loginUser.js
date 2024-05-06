import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_ID, USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../const/actionTypes";
import { API_URL } from "../http/api";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "login/User",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}api/User/Login`, {
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
      localStorage.setItem(
        USER_LOCALSTORAGE_ID,
        JSON.stringify(response.data.currentUser)
      );
      thunkAPI.dispatch(userActions.setUser(response.data.currentUser));
      return response.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue("Неправильный пароль или логин");
    }
  }
);
