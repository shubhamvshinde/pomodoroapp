import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import Statep from './Component/Statep';

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <Statep>
      <App />
    </Statep>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
