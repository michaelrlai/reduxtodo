import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    listAll: (state, action) => {
      state.todoList = [...action.payload];
    },
  },
});

export const { listAll } = todoSlice.action;

export default todoSlice.reducer;
