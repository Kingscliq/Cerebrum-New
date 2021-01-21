import React from "react";

function Button({ className, text, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export { Button };
