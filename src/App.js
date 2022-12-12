import './App.css';
import {  Routes, Route } from 'react-router-dom'; 
import Vehicles from './client/Components/Vehicles/Vehicles'
import Repair from './client/Components/Repair/Repair'
import Home from './client/Components/Mainpage/Mainpage'
import Articles from './client/Components/Articles/Articles'
import Contact from './client/Components/Contact/Contact'
import Error from './client/Components/ErrorPage/Error'



function App() {
  return (
    
    <Routes> 
      <Route path="/Vehicles"  element = {<Vehicles/>}/>
      <Route path="/Repair" element = {<Repair/>}/>
      <Route path="/Contact" element = {<Contact/>}/>
      <Route path="/Articles" element = {<Articles/>}/>
      <Route path="/"  element = {<Home/>}/>
      <Route path="*"  element = {<Error/>}/>       
    </Routes>
  );
}

export default App;
