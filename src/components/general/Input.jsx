import React from 'react'


const Input = (props) => {

    const {labelClass, id, label, classs, image, type, inputRef, inputClass } = props

  return (
    <div>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <div className={classs} >
        <img src={image} alt="" className='h-6 px-4' />
      <input type={type} ref={inputRef} id={id} className={inputClass} />
      </div> 
      
    </div>
  )
}

export default Input


