import React from "react";
import "./Error.css"; 

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-box">
        <p className="error-text">{message || "Something went wrong!"}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
