import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postBookForm = createAsyncThunk(
  "post_bookForm",
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post("https://localhost:7045/user/book", {
        tourID: bookData.tourID
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