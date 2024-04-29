import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../http/api";
import axios from "axios";

export const registUser = createAsyncThunk(
  "regist/User",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}api/Auth/Register`, {
        UserName: authData.username,
        email: authData.email,
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
