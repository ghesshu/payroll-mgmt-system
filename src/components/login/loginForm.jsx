import React from 'react';
import Input from '../general/Input';
import Button from '../general/button';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import lock from '../../assets/lock.png'
import user from '../../assets/user.png'

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    navigate('/home')
  };

//   Styles
let inputStyles = 'flex items-center border rounded-lg';
let buttonStyle = 'text-white bg-slate-800 w-full py-3 rounded-lg'
let iClass = 'w-full py-3 text-base px-2'

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
        
      <Input image={user} classs={inputStyles} inputClass={iClass}  label="" type="email" id="email" inputRef={emailRef} />
      <Input image={lock} classs={inputStyles} inputClass={iClass} label="" type="password" id="password" inputRef={passwordRef} />
      <Button text="login" onClick={handleSubmit} className={buttonStyle}/>
    </form>
  );
};

export default LoginForm;
