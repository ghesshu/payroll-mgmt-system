import React from 'react'
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
  return (
    // <>
    // <div className=' mt-14 flex flex-col h-screen bg-slate-800 w-80'>

    // <PanelItems
    //     button={props.homeClick}
    //     image={home}
    //     text="Home"
    //   />
    //   <PanelItems
    //     button={props.aboutClick}
    //     image={home}
    //     text="About"
    //   />
    //   <PanelItems
    //     button={props.attendanceClick}
    //     image={home}
    //     text="Attendance"
    //   />
    //   <PanelItems
    //     button={props.pListClick}
    //     image={home}
    //     text="Payroll List"
    //   />
    //   <PanelItems
    //     button={props.eListClick}
    //     image={home}
    //     text="Employee List"
    //   />
    //   <PanelItems
    //     button={props.dListClick}
    //     image={home}
    //     text="Department List"
    //   />
    //   <PanelItems
    //     button={props.pListClick}
    //     image={home}
    //     text="Position List"
    //   />
    //   <PanelItems
    //     button={props.aListClick}
    //     image={home}
    //     text="Allowance List"
    //   />
    //   <PanelItems
    //     button={props.deductionClick}
    //     image={home}
    //     text="Deduction List"
    //   />
    //   <PanelItems
    //     button={props.usersClick}
    //     image={home}
    //     text="Users"
    //   />

    // </div>
    // </>

    <div className="flex flex-col bg-yellow-600 w-80 mt-14 space-y-12">

      <div className="flex flex-col items-center justify-center mt-12 space-y-2">
      <img src={user} alt="" className='h-28 border-4 p-2 border-yellow-500 rounded-full' />
      <h1 className='font-bold text-white'>ADMINISTRATOR</h1>
      </div>
      <div className='flex flex-col h-screen '>
      <PanelItem
        onClick={() => props.handleItemClick('home')}
        image={home}
        text='Home'
        active={props.activeItem === 'home'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('about')}
        image={about}
        text='About'
        active={props.activeItem === 'about'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('attendance')}
        image={attendance}
        text='Attendance'
        active={props.activeItem === 'attendance'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('payroll')}
        image={payroll}
        text='Payroll List'
        active={props.activeItem === 'payroll'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('employee')}
        image={employee}
        text='Employee List'
        active={props.activeItem === 'employee'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('department')}
        image={department}
        text='Department List'
        active={props.activeItem === 'department'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('position')}
        image={position}
        text='Position List'
        active={props.activeItem === 'position'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('allowance')}
        image={allowance}
        text='Allowance List'
        active={props.activeItem === 'allowance'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('deduction')}
        image={deduction}
        text='Deduction List'
        active={props.activeItem === 'deduction'}
      />
      <PanelItem
        onClick={() => props.handleItemClick('users')}
        image={users}
        text='Users'
        active={props.activeItem === 'users'}
      />
    </div>
    </div>
  )
}

export default Navpanel


