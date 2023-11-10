import React from "react";
import "./Input.css";

function Input({ type, onChange, className, placeholder,value,onSubmit }) {
  return (
    <div className="input-container">
      <input
      onSubmit={onSubmit}
        type={type}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default Input;
