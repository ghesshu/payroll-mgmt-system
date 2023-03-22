import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/general/layout';
import Pcontent from '../components/payroll/Pcontent';


const Home = () => {


  return (
    <div className=''>
    <Layout page={<Pcontent />} payrollActive='border-b-white' />
    </div>
  )
}

export default Home;
