import { createSlice } from "@reduxjs/toolkit";
import { getTour } from "./asyncThunk/getTour";

const initialState = {
  isLoading: false,
  error: "",
  countries: [],
};
export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setField: (state, action) => {
      state.countries = action.payload;
    },
  },
    extraReducers: (builder) => {
      builder
        .addCase(getTour.pending, (state, action) => {
          state.error = undefined;
          state.isLoading = true;
        })
        .addCase(getTour.fulfilled, (state, action) => {
          state.isLoading = false;
          state.countries = action.payload;
        })
        .addCase(getTour.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
});

export const { actions: countriesActions } = countrySlice;
export const { reducer: countriesReducer } = countrySlice;
