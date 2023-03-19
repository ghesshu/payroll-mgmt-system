import React from 'react'
import Loginform from './loginForm'

const layout = () => {

    // Styles
    let bacground = 'h-screen bg-yellow-500 flex justify-center items-center'

  return (
    <div className={bacground}>
    <div className="bg-white w-80 smd:w-96 h-[500px] rounded-lg p-4 smd:px-8 space-y-6">

    <h1 className='text-3xl text-center py-6 border-b'>Payroll System</h1>

    <h1 className='text-center text-2xl text-slate-700'>Login</h1>

    <div className="">
    <Loginform />
    </div>

    <h1 className='text-center text-slate-700'>Not a member? <span className='text-yellow-500'>Contact the Admin</span></h1>
    </div>
    </div>
  )
}

export default layout
