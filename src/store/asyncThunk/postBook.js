import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postBookForm = createAsyncThunk(
  "post_bookForm",
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post("https://localhost:7045/user/book", {
        name: bookData.name,
        dateOfDispatch: bookData.dateOfDispatch,
        dateOfArrival: bookData.dateOfArrival,
        count: bookData.count.value,
        total: bookData.total,
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