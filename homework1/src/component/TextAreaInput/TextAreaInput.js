import React from "react";
import { Error } from "../Error/Error";
import "./TextAreaInput.css";

export const TextAreaInput = ({
  label,
  name,
  handleChange,
  inputValue,
  placeholder,
  error
}) => {
  return (
    <div className="TextAreaInput">
      <label>{label}</label>
      <textarea
        className="textArea"
        name={name}
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
        rows={7}
      />
      {error ? <Error>{error}</Error> : <Error>Осталось {600 - inputValue.length}/600</Error>}
    </div>
  );
};
