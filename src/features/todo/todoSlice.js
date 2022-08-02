import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      context: "learn redux",
      done: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = new Object();
      newTodo.id = uuidv4();
      newTodo.context = action.payload;
      newTodo.done = false;
      state.todos.push(newTodo);
    },
    doneTodo(state, action) {
      state.todos.map((todo) => {
        if (todo.id == action.payload) {
          todo.done = !todo.done;
        }
      });
    },
    deleteTodo(state, action) {
      //   state.todos.splice(action.payload, 1);
      state.todos.forEach(function (item, index, arr) {
        if (item.id == action.payload) {
          arr.splice(index, 1);
        }
      });
    },
  },
});

export const { addTodo, doneTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
