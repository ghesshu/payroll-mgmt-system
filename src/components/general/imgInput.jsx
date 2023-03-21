import React from 'react'


const ImgInput = (props) => {

    const {labelClass, id, label, classs, image, type, inputRef, inputClass, imgClass } = props

  return (
    <>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <div className={classs} >
        <img src={image} alt="" className={`h-6 px-4 ${imgClass}`} />
      <input type={type} ref={inputRef} id={id} className={inputClass} />
      </div> 
      
    </>
  )
}

export default ImgInput


