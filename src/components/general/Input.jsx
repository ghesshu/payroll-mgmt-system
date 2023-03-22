import React from 'react'

const Input = (props) => {
    const {labelClass, id, label, type, inputRef, inputClass, placeholder} = props
  return (
    <>
    <label className={labelClass} htmlFor={id}>{label}</label>
    <br />
    <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        
        
      />
    </>
  )
}

export default Input
