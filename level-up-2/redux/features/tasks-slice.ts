import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../../app/types/Task";

type InitialState = {
  tasks: TaskType[];
  completedTasks: TaskType[];
  selectedTask: TaskType | null;
};

const initialState: InitialState = {
  tasks: [],
  completedTasks: [],
  selectedTask: null,
};

export const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    setTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks.push(action.payload);
      state.tasks.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });
    },

    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks.splice(
        state.tasks.findIndex((task) => task._id === action.payload),
        1,
      );
      state.tasks.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });
    },

    addInitialTasks: (state, action: PayloadAction<TaskType[]>) => {
      state.tasks = action.payload;
      state.tasks.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload,
      );
      state.tasks[index].completed = !state.tasks[index].completed;
      state.tasks.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });
    },

    setSelectedTask: (state, action: PayloadAction<TaskType | null>) => {
      state.selectedTask = action.payload;
    },

    setCompletedTasks: (state, action: PayloadAction<TaskType[]>) => {
      state.completedTasks = action.payload;
    },
  },
});

export const {
  setTask,
  removeTask,
  addInitialTasks,
  toggleComplete,
  setSelectedTask,
  setCompletedTasks,
} = tasks.actions;
export default tasks.reducer;
