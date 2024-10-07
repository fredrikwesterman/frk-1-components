import React from "react";

const Button = ({ renderComponent }) => {
  return (
    <div>
      <button onClick={renderComponent}>click me</button>
    </div>
  );
};

export default Button;
