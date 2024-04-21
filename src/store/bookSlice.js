import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { postBookForm } from "./asyncThunk/postBook";

const initialState = {
  isLoading: false,
  error: "",
  tourID: "",
  country: "",
  name: "",
  dateOfDispatch: "",
  dateOfArrival: "",
  count: 1,
  total: 0,
  result: '',
};
export const bookSlice = createSlice({
  name: "bookForm",
  initialState,
  reducers: {
    setField: (state, action) => {
        state[action.payload.fieldName] = action.payload.value;
    },
    setCount: (state, action) => {
        state.count = action.payload;
    },
    setTotal: (state, action) => {
        state.total = action.payload.sumPrice;
    },
    setTourID: (state, action) => {
      state.tourID = action.payload;
  }
  },
    extraReducers: (builder) => {
      builder
        .addCase(postBookForm.pending, (state, action) => {
          state.error = undefined;
          state.isLoading = true;
        })
        .addCase(postBookForm.fulfilled, (state, action) => {
          state.isLoading = false;
          state.result = action.payload;
        })
        .addCase(postBookForm.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
});

export const { actions: bookActions } = bookSlice;
export const { reducer: bookReducer } = bookSlice;
