import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { API_URL } from "../http/api";

export const postBookForm = createAsyncThunk(
  "post_bookForm",
  async (bookData, thunkAPI) => {
    try {
      console.log("Sending request with data:", bookData);

      const response = await api.patch(`${API_URL}BookTour`, {
        tourId: Number(bookData.tourID),
        persons: Number(bookData.count.value)
      });

      console.log("Response received:", response.data);
      
      if (!response.data) {
        throw new Error();
      }
      alert(response.data)
      return response.data;
    } catch (error) {
      console.error("Request failed with error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);