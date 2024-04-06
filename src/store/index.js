import { configureStore } from "@reduxjs/toolkit";
import { registReducer } from "./registrationSlice";
import { authReducer } from "./authenticationSlice";
import { countriesReducer } from "./countrySlice";
import { userReducer } from "./userSlice";
import { bookReducer } from "./bookSlice";

export function createRootStore(initialState) {
  const rootReducer = {
    registration: registReducer,
    authentication: authReducer,
    countriesData: countriesReducer,
    user: userReducer,
    book: bookReducer,
  };
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
