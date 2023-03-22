import React from 'react'
import Input from '../general/input'
import { useRef } from 'react';
import Select from '../general/select';

const NewEmployee = (props) => {

  const {saveEmployee} = props

  const {nameRef, genderRef, emailRef, telRef, departmentRef, positionRef, accountRef, salaryRef, idCardRef, idNumRef, dobRef   } = useRef();

  // const addEmployee = (event) => {
  //   event.preventDefault();
  //   const name = nameRef.current.value;
  //   const gender = genderRef.current.value;
  //   const email = emailRef.current.value;
  //   const tel = telRef.current.value;
  //   const department = departmentRef.current.value;
  //   const position = positionRef.current.value;
  //   const account = accountRef.current.value;
  //   const salary = salaryRef.current.value;
  //   const idCard = idCardRef.current.value;
  //   const idNum = idNumRef.current.value;
  //   const dob = dobRef.current.value;
  //   console.log(name, gender);
  //   // navigate('/home')

  // };

  const options = [
    { label: '...', value: 'null' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  return (
    <div className="mt- text-slate-700">
      <h1 className="text-center text-2xl p-8">New Employee</h1>
    <div className="border p-4 rounded-lg ">
    <form action="" className='space-y-16 p-4'>

    <div className="flex space-x-4 justify-between items-center">

  
    <Input label='Name' labelClass='w-32' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4 w-2/3 rounded-lg' placeholder='Name' />

    {/* <Input label='Gender' labelClass='' type ='datalist' inputRef={nameRef} id='empName' inputClass='border p-4  w-1/3 rounded-lg' /> */}
    <Select label="Gender" options={options} selectClass='border p-4 w-1/3 rounded-lg' />

    </div>

    <div className="flex space-x-4 justify-between items-center">
    <Input label='Email' labelClass='w-32' type ='email' inputRef={nameRef} id='empName' inputClass='border p-4 w-1/2 rounded-lg' placeholder='Email' />

    <Input label='Tel' labelClass='w-32 text-right' type ='tel' inputRef={genderRef} id='empName' inputClass='border p-4  w-1/2 rounded-lg' placeholder='+233 ...' />

    </div>

    <div className="flex space-x-4 justify-between items-center">
    <Input label='Department' labelClass='w-32' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4 w-1/2 rounded-lg' placeholder='' />

    <Input label='Position' labelClass='w-32 text-right' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4  w-1/2 rounded-lg' placeholder='' />

    </div>

    <div className="flex space-x-4 justify-between items-center">
    <Input label='Account' labelClass='w-32' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4 w-1/2 rounded-lg' placeholder=''  />

    <Input label='Salary' labelClass='w-32 text-right' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4  w-1/2 rounded-lg' placeholder='' />

    </div>

    <div className="flex space-x-4 justify-between items-center">
    <Input label='ID' labelClass='' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4 w-1/3 rounded-lg' placeholder='' />

    <Input label='ID Number' labelClass='' type ='text' inputRef={nameRef} id='empName' inputClass='border p-4  w-1/3 rounded-lg' placeholder=''  />

    <Input label='DOB' labelClass='' type ='date' inputRef={nameRef} id='empName' inputClass='border p-4  w-1/3 rounded-lg' placeholder='' />

    </div>
    
    <button onClick={saveEmployee} className="bg-blue-700 hover:bg-blue-300 transition ease-in-out duration-700 flex items-center space-x-2  text-white text-sm px-6 py-2 rounded-md">
        Save
        </button>
    </form>
    </div>
    </div>
  )
}

export default NewEmployee
