import React from 'react'
import { useState } from 'react'
import add from '../../assets/add.png'
import Search from '../../components/general/search'
import EmployeeTable from '../../components/general/employeeTable'
import NewEmployee from '../../components/pages/newEmployee'


const EmployeeList = () => {
  const [displayList, setDisplayList] = useState('block')
  const [displayNew, setDisplayNew] = useState('hidden')

  function addEmployee(event){
    event.preventDefault();
    setDisplayList('hidden transition ease-in-out duartion-500')
    setDisplayNew('block')
  } 

  function saveEmployee(event){
    event.preventDefault();
    setDisplayList('block')
    setDisplayNew('hidden')
  }

  return (
    <div className="text-slate-600">
    <div className=''>
      <div className="flex justify-between">
      <h1>Employees Manager / <span className='text-yellow-500' >List</span></h1>

      <button onClick={addEmployee} className="bg-blue-700 hover:bg-blue-300 transition ease-in-out duration-700 flex items-center space-x-2  text-white text-sm px-6 py-2 rounded-md">
        <img src={add} alt="" className='h-5'/>
        <h1>Add Employee</h1>
        </button>
    </div>

    {/* Employee List */}
    <div className={` ${displayList} border p-4 mt-11 `}>
    <div className="flex justify-between items-center">
    <h1>EMPLOYEES LIST</h1>

    <Search text='Search' placeholder='Search...' />
    </div>
    <div className="">
      <EmployeeTable />
    </div>

    </div>


    {/* New Employee Form */}
    <div className={`${displayNew}`}>
    <NewEmployee saveEmployee={saveEmployee} />
    </div>
    </div> 

   
    </div>
  )
}

export default EmployeeList














