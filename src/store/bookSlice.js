import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
//import { registUser } from "./asyncThunk/registUser";

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
        state.total = action.payload.price;
    },
    setTourID: (state, action) => {
      state.tourID = action.payload;
  }
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(registUser.pending, (state, action) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(registUser.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(registUser.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export const { actions: bookActions } = bookSlice;
export const { reducer: bookReducer } = bookSlice;
