import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks-slice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
