import React from 'react'
import add from '../../assets/add.png'
import Table from '../../components/general/table'
import Search from '../../components/general/search'


const payroll = () => {
  return (
    <div>
      <div className="text-slate-600">
      <div className="flex itmes-center justify-between py-4 px-2 p-2 border-b">
        <h1 className='font-bold'>Payroll List</h1>

        <button className="bg-blue-500 flex items-center space-x-2  text-white text-sm px-6 py-2 rounded-md">
        <img src={add} alt="" className='h-5'/>
        <h1>Add Payroll</h1>
        </button>
      </div>

      <div className="flex justify-between items-center p-2">
      <div className="flex">
        <h1>show</h1>
      </div>

      <Search text='Search' placeholder='Search...' />
      </div>

      <div className="border mx-9 m-9">
    <Table />
    </div>
      </div>
    </div>
  )
}

export default payroll
