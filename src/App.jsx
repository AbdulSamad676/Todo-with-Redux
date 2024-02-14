import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
// import { faCoffee } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<>
			<div>{/* <FontAwesomeIcon icon='fa-solid fa-pencil' /> */}</div>
			<AddTodo />
			<Todos />
		</>
	);
}

export default App;
