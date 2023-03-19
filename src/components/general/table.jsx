import React from 'react'
import { useState, useEffect } from 'react';
import TableHead from './tableHead';
import TableData from './tableData';
import TableAction from './tableAction';

import trash from '../../assets/delete.png'
import view from '../../assets/view.png'
import edit from '../../assets/edit.png'

const Table = () => {
    const [data, setData] = useState([]);

  // Fetch data from API or database
  useEffect(() => {
    // Your code to fetch data here
    // Example:
    setData([
      { id: 1, name: 'John', age: 30, city: 'New York', country: 'USA' },
      { id: 2, name: 'Emma', age: 25, city: 'London', country: 'UK' },
      { id: 3, name: 'Mark', age: 35, city: 'Toronto', country: 'Canada' },
      { id: 4, name: 'Anna', age: 27, city: 'Sydney', country: 'Australia' },
      { id: 4, name: 'Anna', age: 27, city: 'Sydney', country: 'Australia' },
      { id: 4, name: 'Anna', age: 27, city: 'Sydney', country: 'Australia' },
    ]);
  }, []);
  return (
    <table className=''>
        <tr className='border-b-2'>
        <TableHead head='Ref No'/>
        <TableHead head='Date From'/>
        <TableHead head='Date to'/>
        <TableHead head='Status'/>
        <TableHead head='Action'/>
          {/* <th className='text-left p-8' >Ref No</th>
          <th className='text-left p-8'>Date From</th>
          <th className='text-left p-8'>Date to</th>
          <th className='text-left p-8'>Status</th>
          <th className='text-left p-8'>Action</th> */}
        </tr>
        {data.map((item) => (
          <tr className='border-b-2 ' key={item.id}>
            <TableData data={item.id}/>
            <TableData data={item.name}/>
            <TableData data={item.age}/>
            <TableData data={item.city}/>
            <TableAction />
            
            {/* <TableData data={item.country}/> */}
            {/* <td className='text-left p-8 border-l-2'>{item.id}</td>
            <td className='text-left p-8 border-l-2'>{item.name}</td>
            <td className='text-left p-8'>{item.age}</td>
            <td className='text-left p-8'>{item.city}</td> 
            <td className='text-left p-8'>{item.country}</td> */}
          </tr>
        ))}
    </table>
  )
}

export default Table
