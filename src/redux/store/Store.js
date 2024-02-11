import { configureStore } from '@reduxjs/toolkit';
import TodoReducers from '../features/todo/TodoSlice';
// step 1  creating store
export const Store = configureStore({
	reducer: TodoReducers,
});
