"use client";

import { createSlice } from "@reduxjs/toolkit";

const UserUiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    showSideBar: true,
  },
  reducers: {
    onTooggleSideBarMenu(state) {
      state.showSideBar = !state.showSideBar;
    },
    onShowSideBar(state, action) {
      state.showSideBar = action.payload;
    },
  },
});

export const UserInterfaceActions = UserUiSlice.actions;

export default UserUiSlice;
