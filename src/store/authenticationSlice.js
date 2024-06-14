import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./asyncThunk/loginUser";

const initialState = {
  isLoading: false,
  error: "",
  password: "",
  email: ""
};
export const authenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.fieldName] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: authActions } = authenticationSlice;
export const { reducer: authReducer } = authenticationSlice;
