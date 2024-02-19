import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { registUser } from "./asyncThunk/registUser";

const initialState = {
  isLoading: false,
  error: "",
  username: "",
  email: "",
  password: "",
};
export const registrationSlice = createSlice({
  name: "Registration",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.fieldName] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registUser.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registActions } = registrationSlice;
export const { reducer: registReducer } = registrationSlice;
