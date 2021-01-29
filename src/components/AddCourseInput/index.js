/** @format */

import React from "react";

function AddCourseInput({
  type,
  placeholder,
  value,
  onChange,
  name,
  disabled,
}) {
  return (
    <div className='input-group mb-3'>
      <input
        type={type}
        className='form-control border-start-1 p-2'
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

export { AddCourseInput };
