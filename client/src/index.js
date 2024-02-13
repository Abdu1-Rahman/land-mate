import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import MainDashboard from './adminpages/MainDashboard'
import Users from './adminpages/Users';
import Profile from './adminpages/Profile';
import ManageProperty from './adminpages/ManageProperty';
import Contact from './pages/Contact';
import Update from './adminpages/Update';
import About from './pages/About';
import Services from './pages/Services';
import AllProperties from './pages/AllProperties';
import Messages from './adminpages/Messages';
import ViewDetails from './pages/ViewDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element= { <Home/> }/>
          <Route path='/signup' element = { <Signup/> }/>
          <Route path='/login' element= { < Login/> }/>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element= { <Contact/> }/>
          <Route path='/allproperties' element={<AllProperties/>}/>
          <Route path='/Details/:id' element={<ViewDetails/>}/>

          
          <Route path='/dashboard' element={<MainDashboard/>}/>
          <Route path='/message' element={<Messages/>}/>
          <Route path='/manageproperty' element={<ManageProperty/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
