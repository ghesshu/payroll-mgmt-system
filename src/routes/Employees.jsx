import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/general/layout';
import Econtent from '../components/employees/Econtent';


const Home = () => {


  return (
    <div className=''>
    <Layout page={<Econtent />} employeesActive='border-b-white' />
    
    </div>
  )
}

export default Home;
