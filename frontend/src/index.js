import React from 'react';
import ReactDOM from 'react-dom/client';
// We import the Bootstrap CSS file here to apply styling across the entire application.
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// You can remove this import if you deleted index.css
// import './index.css'; 


// ReactDOM.createRoot is the standard way to initialize a React 18+ application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import reportWebVitals from './reportWebVitals';
// reportWebVitals();