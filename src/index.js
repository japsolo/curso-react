import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
