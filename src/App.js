import React from 'react';
import { Routes, Route, useNavigate, Switch } from 'react-router-dom';
import './App.css';

import Login from './routes/Login';
// import Homee from './routes/Homee'
import Allowance from './routes/Allowance'
import Deduction from './routes/Deduction'
import Department from './routes/Department'
import Payroll from './routes/Payroll'
import Employees from './routes/Employees'
import Home from './routes/Home'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/payroll' element={<Payroll/>} />
    <Route path='/employees' element={<Employees/>} />
    <Route path='/department' element={<Department/>} />
    <Route path='/allowance' element={<Allowance/>} />
    <Route path='/deduction' element={<Deduction/>} />
    </Routes>
  );
} 

export default App;
