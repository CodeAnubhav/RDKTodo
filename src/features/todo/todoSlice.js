import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
  todos: [{ id: 1, todo: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  intialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
        const { id, updatedTodo } = action.payload;
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, todo: updatedTodo } : todo
        );
      }
      
  },
});

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer