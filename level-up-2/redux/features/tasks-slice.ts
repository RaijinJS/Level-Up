import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../../app/types/Task";

type InitialState = TaskType[];

const initialState: InitialState = [];

export const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    setTask: (state, action: PayloadAction<TaskType>) => {
      state.push(action.payload);
    },

    removeTask: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((task) => task._id === action.payload),
        1,
      );
    },
    addInitialTasks: (state, action: PayloadAction<TaskType[]>) => {
      return action.payload;
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((task) => task._id === action.payload);
      state[index].completed = !state[index].completed;
      state.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });
    },
  },
});

export const { setTask, removeTask, addInitialTasks, toggleComplete } = tasks.actions;
export default tasks.reducer;
