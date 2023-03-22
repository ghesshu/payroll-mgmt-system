import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/general/layout';
import DPcontent from '../components/departments/DPcontent';


const Home = () => {


  return (
    <div className=''>
    <Layout page={<DPcontent />} departmentActive='border-b-white' />
    
    </div>
  )
}

export default Home;
