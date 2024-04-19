import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTour = createAsyncThunk(
  "get_tour",
  async (thunkAPI) => {
    try {
      const response = await axios.get("https://localhost:7045/tour");

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
); 