import React from "react";
import "./Button.css";

function Button({ text, className, onClick, type,disabled }) {
  return (
    <div className="btn-container">
      <button disabled={disabled} type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}

export default Button;
