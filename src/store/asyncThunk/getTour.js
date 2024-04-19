import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../http/api";

export const getTour = createAsyncThunk(
  "get_tour",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}GetAllTours`);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
); 