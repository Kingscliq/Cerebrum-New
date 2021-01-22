import React from "react";
import { FaUser } from "react-icons/fa";

function Input({ icon, type, placeholder, value, onChange, name, disabled }) {
  return (
    <div className="input-group mb-3">
      <span
        className="icon-color input-group-text bg-white border-end-0"
        id="basic-addon1"
      >
        {icon}
      </span>
      <input
        type={type}
        className="form-control border-start-0 p-2"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
        required
      />
    </div>
  );
}

export { Input };
