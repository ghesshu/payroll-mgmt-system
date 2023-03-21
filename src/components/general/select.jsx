import React from 'react';

const Select = ({ label, labelClass, selectClass, options }) => {
  return (
    <>
      <label htmlFor="select">{label}</label>
      <select className={selectClass} id="select">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;


// import React from 'react';

// const Radio = ({ label, labelClass, radioClass, options }) => {
//   return (
//     <>
//       <label>{label}</label>
//       {options.map((option, index) => (
//         <div key={index}>
//           <input
//             className={radioClass}
//             type="radio"
//             id={`option${index}`}
//             name="options"
//             value={option.value}
//           />
//           <label htmlFor={`option${index}`}>{option.label}</label>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Radio;
