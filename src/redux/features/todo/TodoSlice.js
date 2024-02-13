// TodoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{
			id: nanoid(),
			title: 'Learn Code',
		},
	],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				title: action.payload,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			console.log('remove called');
			state.todos = state.todos.filter(
				todo => todo.id !== action.payload
			);
		},

		//
		// removeTodo: (state, action) => {
		// 	console.log('remove called');
		// 	state.todos = state.todos.filter(
		// 		todo => todo.id !== action.payload
		// 	);
		// },
		//
		updateTodo: (state, action) => {
			// Add logic to update a todo if needed
			const { editId, updateInput } = action.payload;
			console.log(
				`Update action id: ${editId} and title: ${updateInput}`
			);

			const index = state.todos?.findIndex(todo => todo.id === editId);
			console.log(`index found: ${index}`);
			state.todos[index] = { ...state.todos[index], title: updateInput };
			console.log('Updated Successfully');
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
