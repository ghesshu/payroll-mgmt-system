import React from 'react'
import { useState } from 'react';
import Navbar from './navbar'
import Navpanel from './navpanel'


// import Home from '../../pages/Home';
// import About from '../../pages/About';
import Home from '../../routes/Home';
import PayrollList from '../../routes/Payroll';
import EmployeeList from '../../routes/Employees';
import DepartmentList from '../../routes/Department';
import AllowanceList from '../../routes/Allowance';
import DeductionList from '../../routes/Deduction';

const Layout = (props) => {
  //   const [activePage, setActivePage] = useState('home');

  const {homeActive, payrollActive, employeesActive, departmentActive, allowanceActive, deductionActive, page} = props

  const handlePanelItemClick = (item) => {
    // setActivePage(item);
  };


  return (
    <div>
      <div className="fixed ">
      <Navbar />
      </div>

      <div className=" flex ">
        
    <div className="fixed flex">
    <Navpanel handleItemClick={handlePanelItemClick}
    homeActive = {homeActive}
    payrollActive = {payrollActive}
    employeesActive = {employeesActive}
    departmentActive = {departmentActive}
    allowanceActive = {allowanceActive}
    deductionActive = {deductionActive}
    />
    </div>
        
        
        <div className=" mt-14 ml-20 lg:ml-80 p-8 w-screen lg:w-[calc(100vw-335px)] ">{page}</div>
      </div>
    </div>
  )
}

  
  export default Layout;
  



