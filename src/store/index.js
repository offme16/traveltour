import { configureStore } from "@reduxjs/toolkit";
import { registReducer } from "./registrationSlice";
import { authReducer } from "./authenticationSlice";

export function createRootStore(initialState) {
  const rootReducer = {
    registration: registReducer,
    authentication: authReducer,
  };
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
