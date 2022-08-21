import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import del TodoContextProvider
import { TodoContextProvider } from "./components/ToDoList/TodoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
