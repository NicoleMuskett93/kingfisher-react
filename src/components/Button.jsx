import React from "react";

const Button = ({ message, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{message}</button>
    </div>
  );
};

export default Button;
