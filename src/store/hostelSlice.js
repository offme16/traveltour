import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getHostel } from "./asyncThunk/getHostel";

const initialState = {
  isLoading: false,
  error: "",
  hostel: undefined
};
export const hostelSlice = createSlice({
  name: "hostel",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getHostel.pending, (state, action) => {
          state.error = undefined;
          state.isLoading = true;
        })
        .addCase(getHostel.fulfilled, (state, action) => {
          state.isLoading = false;
          state.hostel = action.payload;
        })
        .addCase(getHostel.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
});

export const { actions: hostelActions } = hostelSlice;
export const { reducer: hostelReducer } = hostelSlice;