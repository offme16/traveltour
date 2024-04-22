import { configureStore } from "@reduxjs/toolkit";
import { registReducer } from "./registrationSlice";
import { authReducer } from "./authenticationSlice";
import { countriesReducer } from "./countrySlice";
import { userReducer } from "./userSlice";
import { bookReducer } from "./bookSlice";
import { hostelReducer } from "./hostelSlice";

export function createRootStore(initialState) {
  const rootReducer = {
    registration: registReducer,
    authentication: authReducer,
    countriesData: countriesReducer,
    user: userReducer,
    book: bookReducer,
    hostel: hostelReducer
  };
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
