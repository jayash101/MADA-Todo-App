import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todos/todoSlice";
import { themeReducer } from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
