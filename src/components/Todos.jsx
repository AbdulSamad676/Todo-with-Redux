import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/features/todo/TodoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
						<div className='flex justify-end gap-2'>
							<button
								className='text-white  bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
								onClick={() => {
									updateHandler(todo);
								}}
							>
								<FontAwesomeIcon icon={faPenToSquare} />
							</button>
							<button
								onClick={() => dispatch(removeTodo(todo.id))}
								className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
							>
								<FontAwesomeIcon icon={faTrashCan} />
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
