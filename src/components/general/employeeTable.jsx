import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TableData from './tableData'
import TableHead from './tableHead'

const EmployeeTable = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate()
   

  // Fetch data from API or database
  useEffect(() => {
    // Your code to fetch data here
    // Example:
    setData([
        { id: 1, Employees: 'John Doe', Department: 'Sales', Position: 'Manager', AccountNumber: '123456', TelephoneNumber: '555-1234', },
        { id: 2, Employees: 'Jane Smith', Department: 'Marketing', Position: 'Coordinator', AccountNumber: '234567', TelephoneNumber: '555-2345', },
        { id: 3, Employees: 'Bob Johnson', Department: 'Finance', Position: 'Analyst', AccountNumber: '345678', TelephoneNumber: '555-3456', },
        { id: 4, Employees: 'Sarah Lee', Department: 'Human Resources', Position: 'Recruiter', AccountNumber: '456789', TelephoneNumber: '555-4567', },
        { id: 5, Employees: 'David Chen', Department: 'Engineering', Position: 'Developer', AccountNumber: '567890', TelephoneNumber: '555-5678', },
        { id: 6, Employees: 'Mary Wilson', Department: 'Operations', Position: 'Coordinator', AccountNumber: '678901', TelephoneNumber: '555-6789', },
        { id: 7, Employees: 'Tom Kim', Department: 'Customer Service', Position: 'Representative', AccountNumber: '789012', TelephoneNumber: '555-7890', },
        { id: 8, Employees: 'Lisa Wong', Department: 'IT', Position: 'Administrator', AccountNumber: '890123', TelephoneNumber: '555-8901', },
        { id: 9, Employees: 'Samuel Lee', Department: 'Operations', Position: 'Supervisor', AccountNumber: '901234', TelephoneNumber: '555-9012', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
        { id: 10, Employees: 'Olivia Rodriguez', Department: 'Sales', Position: 'Associate', AccountNumber: '012345', TelephoneNumber: '555-0123', },
  ]);  
  }, []);

  return (
    <table className='border mt-8'>
        <tr className='bg-slate-200 border-slate-200 border-2'>
        <TableHead head='ID' className='p-6 text-left'/>
        <TableHead head='Employess' className='p-6 text-left'/>
        <TableHead head='Department' className='p-6 text-left'/>
        <TableHead head='Position' className='p-6 text-left'/>
        <TableHead head='Account Number' className='p-6 text-left'/>
        </tr>
        {data.map((item) => (
          <tr className='border-b-2 ' key={item.id}>
          <TableData data={item.id} className='text-left p-4 px-6 lg:p-6' />
          <a href={navigate('')}><TableData data={item.Employees} className='text-left p-4 px-6 lg:p-6 text-yellow-700 hover:text-yellow-500 cursor-pointer' /></a>
          <TableData data={item.Department} className='text-left p-4 px-6 lg:p-6' />
          <TableData data={item.Position} className='text-left p-4 px-6 lg:p-6' /> 
          <TableData data={item.AccountNumber} className='text-left p-4 px-6 lg:p-6' />
          {/* <TableData data={item.TelephoneNumber} className='text-center p-2 lg:p-6' /> */}
        </tr>
        ))}
    </table>
  )
}

export default EmployeeTable
