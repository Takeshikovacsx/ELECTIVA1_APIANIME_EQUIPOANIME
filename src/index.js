import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AnimeSearchApp } from './components/AnimeSearchApp';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AnimeSearchApp />
  </React.StrictMode>
);

