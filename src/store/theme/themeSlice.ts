"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "dark" | "light";
}

const initialState: ThemeState = {
  mode: "dark",
  // mode:
  //   (typeof window !== undefined &&
  //     JSON.parse(window.localStorage.getItem("theme")!)) ||
  //   "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    initializeTheme: (state, action) => {
      state.mode = action.payload;
    },

    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";

      localStorage.setItem("theme", JSON.stringify(state.mode));
    },

    setMode: (state, action) => {
      state.mode = action.payload;

      localStorage.setItem("theme", JSON.stringify(state.mode));
    },
  },
});

export const { toggleMode, setMode, initializeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
