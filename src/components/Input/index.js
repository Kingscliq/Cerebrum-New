/** @format */

import React from "react";
import "./Input.css";

function Input({
  className,
  icon,
  icon2,
  type,
  placeholder,
  value,
  onChange,
  onEye,
  name,
  disabled,
}) {
  return (
    <div className={"input-group"}>
      <span
        className="icon-color input-group-text bg-white border-end-0"
        id="basic-addon1"
      >
        {icon}
      </span>
      <input
        type={type}
        className="form-control border-start-0 border-end-0 p-2"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
        required
      />
      <span
        className="input-icon1 icon-color input-group-text bg-white border-left-0"
        onClick={onEye}
      >
        {icon2}
      </span>
    </div>
  );
}

export { Input };
