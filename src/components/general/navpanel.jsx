import React from 'react'
import { Link } from 'react-router-dom';
import home from '../../assets/home.png'
import PanelItem from './panelItems'
// import home from '../../assets/home.png';
import about from '../../assets/about.png';
import attendance from '../../assets/attendance.png';
import payroll from '../../assets/payroll.png';
import employee from '../../assets/employee.png';
import department from '../../assets/department.png';
import position from '../../assets/position.png';
import allowance from '../../assets/allowance.png';
import deduction from '../../assets/deduction.png';
import users from '../../assets/users.png';

import user from '../../assets/homeUser.png'

const Navpanel = (props) => {
  const {homeActive, payrollActive, employeesActive, departmentActive, allowanceActive, deductionActive} = props
  return (


    <div className="flex flex-col bg-yellow-500 w-16 lg:w-80  mt-14 space-y-12">

      <div className="flex flex-col items-center justify-center mt-12 space-y-2">
      <img src={user} alt="" className='h-14 lg:h-28 border-4 p-2 border-yellow-300 rounded-full' />
      <h1 className='hidden lg:block font-bold text-white'>ADMINISTRATOR</h1>
      </div>
      <div className='flex flex-col h-screen '>
      
      <Link to="/home">
      <PanelItem
        // onClick={() => props.handleItemClick('home')}
        image={home}
        text='Home'
        active={homeActive}
      />
      </Link>
      
      <Link to="/payroll">
      <PanelItem
        // onClick={() => props.handleItemClick('payroll')}
        image={payroll}
        text='Payroll'
        active={payrollActive}
      />
      </Link>
      <Link to="/employees">
      <PanelItem
        // onClick={() => props.handleItemClick('employee')}
        image={employee}
        text='Employees'
        active={employeesActive}
      />
      </Link>
      <Link to="/department">
      <PanelItem
        // onClick={() => props.handleItemClick('department')}
        image={department}
        text='Departments'
        active={departmentActive}
      />
      </Link>

      <Link to="/allowance">
      <PanelItem
        // onClick={() => props.handleItemClick('allowance')}
        image={allowance}
        text='Allowance'
        active={allowanceActive}
      />
      </Link>

      <Link to="/deduction">
      <PanelItem
        // onClick={() => props.handleItemClick('deduction')}
        image={deduction}
        text='Deductions'
        active={deductionActive}
      />
      </Link>
    </div>
    </div>
  )
}

export default Navpanel


