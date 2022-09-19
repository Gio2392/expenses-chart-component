import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './normalize.css';
import './index.css';
import { Styles } from './styles/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Styles />
    <App />
  </React.StrictMode>
)
