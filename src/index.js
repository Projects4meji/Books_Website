import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/BooksContext';
import { ToDoState } from './context/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoState>
  <Provider>
    <App />
  </Provider>
  </ToDoState>
);


