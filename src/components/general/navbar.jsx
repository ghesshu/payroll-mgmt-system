import React from 'react'
import { useState, useEffect, useRef } from 'react';

import power from '../../assets/power.png'

const Navbar = () => {

    const [display, setDisplay] = useState('hidden');
    const node = useRef();

    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClick);
        // return function to be called when unmounted
        return () => {
        document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
        // inside click
        return;
        }
        // outside click
        setDisplay('hidden');
    };

        

  return (
    <div className=' w-screen  bg-white shadow-lg flex justify-between px-6 py-4 xl:px-9'>
    <h1>Spaged Payroll Management System</h1>

    <div className="relative flex flex-col" ref={node}>
    <button onClick={() => {setDisplay('block')}} className="flex space-x-2 items-center">
    <h1>Adminisrator</h1>
    <img src={power} alt="" className='h-4'/>
    </button>

    <div className={` ${display} absolute mt-10 bg-slate-100 -ml-10 `}>
        <button className='py-4 px-14 hover:border-b-2 border-yellow-600'>Logout</button>
        {/* <button className='py-4 px-14 hover:border-b-2 border-black'>Logout</button> */}
    </div>    
    </div>
    </div>
  )
}

export default Navbar
