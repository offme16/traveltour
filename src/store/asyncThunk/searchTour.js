import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { countriesActions } from "../countrySlice";
import { API_URL } from "../http/api";

export const searchTour = createAsyncThunk(
  "post_searchTour",
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}FindTour`, {
        country: bookData.country,
        departureDate: bookData.dateOfDispatch,
        arrivalDate: bookData.dateOfArrival,
        passengers: bookData.count,
        priceMin: bookData.priceMin,
        priceMax: bookData.priceMax
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