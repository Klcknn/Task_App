import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProviderFunction } from './context/task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProviderFunction>
    <App />
  </ProviderFunction>
);
