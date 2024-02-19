import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../userSlice";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";

export const registUser = createAsyncThunk(
  "regist/User",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post("https://localhost:7045/user/signup", {
        username: authData.username,
        lastname: authData.lastname,
        surname: authData.surname,
        email: authData.email,
        phonenumber: authData.phonenumber,
        address: authData.address,
        password: authData.password,
      });

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.userId)
      );
      console.log(response.data.userId);
      thunkAPI.dispatch(userActions.setUser(response.data.userId));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
