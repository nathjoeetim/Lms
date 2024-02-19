"use client";

import { configureStore } from "@reduxjs/toolkit";
import UserUiSlice from "./ui";
import CurrentUserData from "./fetchCurrentUserData";

export const store = configureStore({
  reducer: {
    ui: UserUiSlice.reducer,
    currentUserGetter: CurrentUserData.reducer,
  },
});
