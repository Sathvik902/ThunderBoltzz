import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Vehicles from './client/Components/Vehicles/Vehicles'
import Repair from './client/Components/Repair/Repair'
import Home from './client/Components/Mainpage/Mainpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom';



// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/vehicles" />
          <Route path="/Repair">
            <Repair />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
