import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/transitions.css';
import './assets/css/spinners.css';
import './assets/css/buttons.css';
import './assets/css/toasts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './pages/components';
import Login from './pages/login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
