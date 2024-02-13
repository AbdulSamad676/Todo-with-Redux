import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/features/todo/TodoSlice';

function Todos() {
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch();
	const [updateInput, setUpdateInput] = useState('');
	const [editId, setEditId] = useState('');
	const [modal, setModal] = useState(false);

	const updateHandler = ({ id, title }) => {
		setModal(true);
		setUpdateInput(title);
		setEditId(id);
		console.log(`todo id: ${id} <br/> updated  with the text ${title}`);
	};
	const updateFormHandler = e => {
		e.preventDefault();
		// console.log(`in updateFrom ${updateInput} and id: ${editId}`);
		dispatch(updateTodo({ editId, updateInput }));
		setModal(false);
	};
	return (
		<div className='w-9/12  mx-auto'>
			{todos.length > 0 ? (
				<div className='text-center text-2xl bg-black w-max mx-auto py-2 px-5  rounded-md my-2 text-white font-bold'>
					Your Todos
				</div>
			) : (
				<div className='text-center text-2xl bg-black w-max mx-auto py-2 px-5  rounded-md my-2 text-white font-bold'>
					No Todo Here
				</div>
			)}

			<ul className='list-none'>
				{todos.map(todo => (
					<li
						className=' flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
						key={todo.id}
					>
						<div className='text-white'>{todo.title}</div>
						<div className='flex justify-end'>
							<button
								className='text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
								onClick={() => {
									updateHandler(todo);
								}}
							>
								Edit
							</button>
							<button
								onClick={() => dispatch(removeTodo(todo.id))}
								className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
									/>
								</svg>
							</button>
						</div>
					</li>
				))}
			</ul>
			<div
				className={`modal ${
					modal ? 'block' : 'hidden'
				}  w-9/12 mx-auto bg-gray-200  mt-5`}
			>
				<button
					onClick={() => {
						setModal(prev => !prev);
					}}
					className={
						'text-white mt-2 absolute top-3 right-3 w-auto bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded font-bold text-lg'
					}
				>
					X
				</button>
				<form onSubmit={updateFormHandler} className=' space-x-3 mt-5 '>
					<div className=''>
						<input
							type='text'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							placeholder='Enter a Todo...'
							value={updateInput}
							onChange={e => setUpdateInput(e.target.value)}
						/>

						<div className='flex justify-center'>
							<button
								type='submit'
								className='text-white mt-3   w-4/12 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded font-bold text-lg'
							>
								Update
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Todos;
