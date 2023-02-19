import React from "react";
import { Error } from "../Error/Error";
import "./Input.css";

export const Input = ({
  label,
  name,
  type,
  handleChange,
  inputValue,
  placeholder,
  pattern,
  maxlength,
  error
}) => {
  console.log(error);
  return (
    <div className="InputLine">
      <label>{label}</label>
      <input
        className="inputStyle"
        name={name}
        type={type ? type : "text"}
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxlength}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};
