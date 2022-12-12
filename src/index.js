import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Vehicles from './client/Components/Vehicles/Vehicles'
// import Repair from './client/Components/Repair/Repair'
// import Home from './client/Components/Mainpage/Mainpage'
import Header from './client/Components/Header';
import Footer from './client/Components/Footer'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <App/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
