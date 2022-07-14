import './assets/main.css';
import App from './App';
import './assets/tailwind.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import * as ReactDOMClient from 'react-dom/client';

ReactDOMClient.createRoot(document.getElementById('root')).render(
    
        <App />
    
);

