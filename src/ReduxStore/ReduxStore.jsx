import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/TODO/TodoSlice";


// Single Source of Truth  -> Single Global Store 


export const ReduxStore = configureStore({
  reducer: todoReducer
});
