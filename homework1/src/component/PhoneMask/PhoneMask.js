import React from "react";
import { Error } from "../Error/Error";
import InputMask from 'react-input-mask';
import "./PhoneMask.css";

export const PhoneMask = ({
  label,
  name,
  handleChange,
  inputValue,
  error,
  mask
}) => {
  return (
    <div className="PhoneMask">
      <label>{label}</label>
      <InputMask
        className="inputStyle"
        name={name}
        onChange={handleChange}
        value={inputValue}
        mask={mask}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};
