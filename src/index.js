import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import { Header,Footer } from './Components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>
);

