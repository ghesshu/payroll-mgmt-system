import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/general/layout';
import Hcontent from '../components/home/Hcontent';


const Home = () => {


  return (
    <div className=''>
    <Layout page={<Hcontent />} homeActive='after:border-b-white' />
    
    </div>
  )
}

export default Home;
