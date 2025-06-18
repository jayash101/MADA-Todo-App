import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  todos: Array<Record<string, string | boolean>>;
  currentTodo: Record<string, string | boolean>;
  isEdited: boolean;
  activeTab: string;
}

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem("todos")!),

  currentTodo: {},

  isEdited: false,
  activeTab: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodos: (state, action) => {
      const todoList = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(todoList));
      state.todos = todoList;
    },

    toggleEdit: (state) => {
      state.isEdited = true;
    },

    cancelEdit: (state) => {
      state.isEdited = false;
    },

    updateTodo: (state, action) => {
      const { title, newTodo } = action.payload;

      const idx = state.todos.findIndex((todo) => todo.title === title);

      if (idx !== -1) {
        // replacing current todo with new
        state.todos[idx] = { ...state.todos[idx], ...newTodo };
      }

      localStorage.setItem("todos", JSON.stringify(state.todos));
      state.isEdited = false;
      state.currentTodo = {};
    },

    deleteTodo: (state, action) => {
      const { title } = action.payload;

      const findTodo = state.todos.filter((todo) => todo.title !== title);

      if (findTodo) {
        localStorage.setItem("todos", JSON.stringify(findTodo));
        state.todos = findTodo;
      }
    },

    fetchCurrentTodo: (state, action) => {
      const { title } = action.payload;

      const findTodo = state.todos.find((todo) => todo.title === title);

      if (findTodo) {
        state.currentTodo = findTodo;
      }
    },

    toggleCompleted: (state, action) => {
      const { title } = action.payload;

      const idx = state.todos.findIndex((todo) => todo.title === title);

      if (idx !== -1) {
        state.todos[idx].isCompleted = !state.todos[idx].isCompleted;
      }

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    updateActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const {
  saveTodos,
  toggleEdit,
  cancelEdit,
  updateTodo,
  deleteTodo,
  fetchCurrentTodo,
  toggleCompleted,
  updateActiveTab,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
