import React from 'react';

const Button = (props) => {
  const { text, onClick, className} = props;

  return (
    <button onClick={onClick} className={className} >
      {text}
    </button>
  );
};

export default Button;
