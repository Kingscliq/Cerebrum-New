import React from "react";

function Button({ className, text, handleClick, loadingIcon, disabled }) {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {loadingIcon}
      {text}
    </button>
  );
}

export { Button };
