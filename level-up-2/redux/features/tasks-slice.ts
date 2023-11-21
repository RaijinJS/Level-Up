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
  },
});

export const { setTask, removeTask, addInitialTasks } = tasks.actions;
export default tasks.reducer;
