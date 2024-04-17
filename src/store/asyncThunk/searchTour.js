import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { countriesActions } from "../countrySlice";

export const searchTour = createAsyncThunk(
  "post_searchTour",
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post("https://localhost:7045/user/book", {
        country: bookData.country,
        dateOfDispatch: bookData.dateOfDispatch,
        dateOfArrival: bookData.dateOfArrival,
        count: bookData.count,
      });

      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(countriesActions.setField(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);