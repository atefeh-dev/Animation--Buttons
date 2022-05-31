/** @format */

import React from "react";
const Button = ({ kind, width, children, isLoading, ...props }) => {
  console.log(isLoading);
  return (
    <button
      className={`custom-btn ${kind}`}
      style={{ width: `${width}` }}
      {...props}>
      {isLoading ? (
        <div className="spinner-container">
          <div className="loading-spinner" />
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};
export default Button;
