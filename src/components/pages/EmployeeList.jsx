import React from 'react'
import add from '../../assets/add.png'
import Search from '../general/search'
import EmployeeTable from '../general/employeeTable'


const EmployeeList = () => {
  return (
    <div className='text-slate-600'>
      <div className="flex justify-between">
      <h1>Employees Manager / <span className='text-yellow-500' >List</span></h1>

      <button className="bg-blue-500 flex items-center space-x-2  text-white text-sm px-6 py-2 rounded-md">
        <img src={add} alt="" className='h-5'/>
        <h1>Add Employee</h1>
        </button>
    </div>

    <div className="border p-4 mt-11">
    <div className="flex justify-between items-center">
    <h1>EMPLOYEES LIST</h1>

    <Search text='Search' placeholder='Search...' />
    </div>
    <div className="">
      <EmployeeTable />
    </div>

    </div>
    </div> 
  )
}

export default EmployeeList
