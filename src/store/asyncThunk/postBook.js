import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { API_URL } from "../http/api";
import { USER_LOCALSTORAGE_ID } from "../const/actionTypes";

export const postBookForm = createAsyncThunk(
  "post_bookForm",
  async (bookData, thunkAPI) => {
    try {
      const userID = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID));
      const response = await api.patch(`${API_URL}BookTour`, {
        tourId: Number(bookData.tourID),
        persons: Number(bookData.count.value),
        userId: userID
      });
      console.log("Response received:", response.data);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);