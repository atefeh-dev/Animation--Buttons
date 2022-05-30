/** @format */

import React from "react";
const Button = ({ kind, width, children, isLoading, ...props }) => {
  console.log(props);
  return (
    <button
      className={`custom-btn ${kind}`}
      style={{ width: `${width}` }}
      {...props}>
      {isLoading ? <span>loading...</span> : <span>{children}</span>}
    </button>
  );
};
export default Button;
