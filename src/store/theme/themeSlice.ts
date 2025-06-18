import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "dark" | "light";
}

const initialState: ThemeState = {
  mode: JSON.parse(localStorage.getItem("theme")!) || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
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

export const { toggleMode, setMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
