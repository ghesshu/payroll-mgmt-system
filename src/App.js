import React from 'react';
import { Routes, Route, useNavigate, Switch } from 'react-router-dom';
import './App.css';

import Login from './routes/Login';
import Home from './routes/Homee'

function App() {

  return (
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/' element={<Login/>} />
    
    
    </Routes>
  );
} 

export default App;
