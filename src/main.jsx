import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from './redux/store/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={Store}>
		<App />
	</Provider>
);
