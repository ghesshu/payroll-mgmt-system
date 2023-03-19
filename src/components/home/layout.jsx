import React from 'react'
import { useState } from 'react';
import Navbar from '../general/navbar'
import Navpanel from '../general/navpanel'


// import Home from '../../pages/Home';
// import About from '../../pages/About';
import Home from '../pages/Home';
import About from '../pages/About';
import Attendance from '../pages/Attendance';
import PayrollList from '../pages/PayrolList';
import EmployeeList from '../pages/EmployeeList';
import DepartmentList from '../pages/DepartmentList';
import PositionList from '../pages/PositionList';
import AllowanceList from '../pages/AllowanceList';
import DeductionList from '../pages/DeductionList';
import Users from '../pages/Users';

const Layout = () => {
    const [activePage, setActivePage] = useState('home');

  const handlePanelItemClick = (item) => {
    setActivePage(item);
  };

  let activePageComponent;

  switch (activePage) {
    case 'home':
      activePageComponent = <Home />;
      break;
    case 'about':
      activePageComponent = <About />;
      break;
    case 'attendance':
      activePageComponent = <Attendance />;
      break;
    case 'payroll':
      activePageComponent = <PayrollList />;
      break;
    case 'employee':
      activePageComponent = <EmployeeList />;
      break;
    case 'department':
      activePageComponent = <DepartmentList />;
      break;
    case 'position':
      activePageComponent = <PositionList />;
      break;
    case 'deduction':
      activePageComponent = <DeductionList />;
      break;
    case 'users':
      activePageComponent = <Users />;
      break;
 
    // add other cases here
    default:
      activePageComponent = null;
  }

  return (
    <div>
      <div className="fixed z-">
      <Navbar />
      </div>

      <div className=" flex">
        
    <div className="fixed">
    <Navpanel handleItemClick={handlePanelItemClick} />
    </div>
        
        
        <div className=" mt-14 ml-80 p-8 w-[calc(100vw-335px)]">{activePageComponent}</div>
      </div>
    </div>
  )
}

  
  export default Layout;
  



