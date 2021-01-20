import React from "react";
import { FaUser } from "react-icons/fa";

function Input({ icon, type, placeholder }) {
  return (
    // <input type="text" className="form-control my-3" placeholder="Full Name" />
    <div class="input-group mb-3">
      <span
        class="icon-color input-group-text bg-white border-end-0"
        id="basic-addon1"
      >
        {icon}
      </span>
      <input
        type={type}
        class="form-control border-start-0 p-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export { Input };
