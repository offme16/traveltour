import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { postBookForm } from "./asyncThunk/postBook";
import { ID_TOUR } from "./const/actionTypes";

const initialState = {
  isLoading: false,
  error: "",
  tourID: "",
  country: "",
  name: "",
  dateOfDispatch: "",
  dateOfArrival: "",
  count: 0,
  total: 0,
  result: '',
  priceMin: 0,
  priceMax: 0,
  hotelID: 0,
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
      localStorage.setItem(ID_TOUR, action.payload);
  },
    clearState: (state) => {
      state.tourID = "";
      state.count = 0;
      state.total = 0;
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
