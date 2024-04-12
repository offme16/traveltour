import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes";

export const getTour = createAsyncThunk(
  "get_tour",
  async () => {
    try {
      const response = await axios.get("https://localhost:7045/user/login");

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
); 