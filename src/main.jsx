import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
const root = document.getElementById('root');
if (root.hasChildNodes() && root.querySelector('main'))
  hydrateRoot(
    root,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
else
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
