/** @format */

import React from "react";
const Button = ({ kind, handleClick }) => {
  return (
    <button className={`custom-btn ${kind}`} onClick={handleClick}>
      <span>Read more</span>
    </button>
  );
};
export default Button;
