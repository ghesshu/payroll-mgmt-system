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
      { id: 1, dateFrom: '19-05-2016', dateTo: '09-08-2020', status: 'New York', action: 'USA' },
      { id: 2, dateFrom: '23-06-2016', dateTo: '02-04-2017', status: 'London', action: 'UK' },
      { id: 3, dateFrom: '14-01-2017', dateTo: '22-01-2019', status: 'Toronto', action: 'Canada' },
      { id: 4, dateFrom: '02-04-2017', dateTo: '09-08-2020', status: 'Sydney', action: 'Australia' },
      { id: 5, dateFrom: '01-10-2017', dateTo: '22-01-2019', status: 'Paris', action: 'France' },
      { id: 6, dateFrom: '11-12-2017', dateTo: '01-06-2018', status: 'Berlin', action: 'Germany' },
      { id: 7, dateFrom: '01-06-2018', dateTo: '01-06-2018', status: 'Madrid', action: 'Spain' },
      { id: 8, dateFrom: '22-01-2019', dateTo: '09-08-2020', status: 'Rome', action: 'Italy' },
      { id: 9, dateFrom: '09-08-2020', dateTo: '22-01-2021', status: 'Athens', action: 'Greece' },
      { id: 10, dateFrom: '14-01-2021', dateTo: '22-01-2022', status: 'Amsterdam', action: 'Netherlands' },
    ]);
  }, []);

  

  

  

  return (
    
    <table className=''>
        <tr className='border-b-2'>
        <TableHead head='Ref No' className='p-6 text-left' />
        <TableHead head='Date From' className='p-6 text-left'/>
        <TableHead head='Date to' className='p-6 text-left'/>
        <TableHead head='Status' className='p-6 text-left'/>
        <TableHead head='Action' className='p-6 text-left'/>
        </tr>
        {data.map((item) => (
          <tr className='border-b-2 ' key={item.id}>
            <TableData data={item.id} className='text-left p-4 px-6 lg:p-6' />
            <TableData data={item.dateFrom} className='text-left p-4 px-6 lg:p-6 text-yellow-700 hover:text-yellow-500 cursor-pointer' />
            <TableData data={item.dateTo} className='text-left p-4 px-6 lg:p-6' />
            <TableData data={item.status} className='text-left p-4 px-6 lg:p-6' />
            <TableAction />
            
    
          </tr>
        ))}
    </table>

    
    


  )
}

export default Table
