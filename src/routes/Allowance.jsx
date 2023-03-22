import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/general/layout';
import Acontent from '../components/allowance/Acontent';


const Home = () => {


  return (
    <div className=''>
    <Layout page={<Acontent />} allowanceActive='border-b-white' />
    
    </div>
  )
}

export default Home;
