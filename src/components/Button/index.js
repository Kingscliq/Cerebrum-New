/** @format */

import React from "react";
function Button({ className, text, handleClick, loadingIcon, disabled, type }) {
  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {loadingIcon}
      {text}
    </button>
  );
}

export { Button };
