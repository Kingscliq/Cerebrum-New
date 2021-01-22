import React from "react";
import { FaUser } from "react-icons/fa";

function Input({ icon, type, placeholder, onChange, value, name }) {
  return (
    // <input type="text" className="form-control my-3" placeholder="Full Name" />
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
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}

export { Input };
