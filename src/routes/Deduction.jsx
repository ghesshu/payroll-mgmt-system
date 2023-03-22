import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/general/layout';
import DDcontent from '../components/deductions/DDcontent';


const Home = () => {


  return (
    <div className=''>
    <Layout page={<DDcontent />} deductionActive='border-b-white' />
    
    </div>
  )
}

export default Home;
