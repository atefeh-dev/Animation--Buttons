/** @format */

import React from "react";
const Button = ({ kind }) => {
  return (
    <button className={`custom-btn ${kind}`}>
      {" "}
      <span>Read more</span>
    </button>
  );
};
export default Button;
