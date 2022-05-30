/** @format */

import React from "react";
const Button = ({ kind, width, text, ...props }) => {
  console.log(props);
  return (
    <button
      className={`custom-btn ${kind}`}
      style={{ width: `${width}` }}
      {...props}>
      <span>{text}</span>
    </button>
  );
};
export default Button;
