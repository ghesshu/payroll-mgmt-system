import React from 'react'
import add from '../../assets/add.png'
import Table from '../general/table'

const PayrolList = () => {
  return (
    <div>
      <div className="border">
      <div className="flex itmes-center justify-between py-4 px-2 p-2 border-b">
        <h1 className='font-bold'>Payroll List</h1>

        <button className="bg-blue-500 flex items-center space-x-2  text-white text-sm px-11 py-1">
        <img src={add} alt="" className='h-5'/>
        <h1>Add Payroll</h1>
        </button>
      </div>

      <div className="flex justify-between items-center p-2">
      <div className="flex">
        <h1>show</h1>
      </div>

      <form className="flex items-center space-x-2">
      <button type="submit" className="border-2 border-yellow-500 hover:border-yellow-700 text-yellow-700 font-bold py-2 px-4 rounded">
    Search
  </button>
    <input type="text" className="border border-gray-300 rounded-md p-2 mr-2" placeholder="Search..." />
  
  </form>
      </div>

      <div className="border mx-9 m-9">
    <Table />
    </div>
      </div>
    </div>
  )
}

export default PayrolList
