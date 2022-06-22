import React from "react";

const FormRow = ({ type, name, value, handleChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default FormRow;
