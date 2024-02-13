"use client";

import { configureStore } from "@reduxjs/toolkit";
import UserUiSlice from "./ui";
import CountryFetcherApi from "./fetchCountry";

export const store = configureStore({
  reducer: {
    ui: UserUiSlice.reducer,
    countryGetter: CountryFetcherApi.reducer,
  },
});

//  ui: UserInterface.reducer,
// event: EventSlice.reducer,
