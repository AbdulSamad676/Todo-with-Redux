import { createSlice, nanoid } from '@reduxjs/toolkit';

// step 2
const initialState = {
	todos: [
		{
			id: 1,
			title: 'Hello',
		},
		{},
	],
};

// step 3 make a Slice

export const todoSlice = createSlice({
	name: todo, // this name will be used in chromedevTool
	initialState,
	reducers: {
		// the reducers object takes properties and values and that is actually functions like

		// Note That
		// state gives initalState access
		// The action gives the access of the individual data that is received like action.payload.id or
		// action.payload.text etc  payload 1 object hai kuch b ly sakta hai

		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				title: action.payload.title,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(
				todo => todo.id !== action.payload.id
			);
		},
		updateTodo: (state, action) => {},
	},
});

// step 4
//Now export individual functionality like
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// step 5 export the reducers globally
export default todoSlice.reducer;
