import React from "react";
import "./Button.css";

export const Button = ({type, title, onClick}) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {title}
    </button>
  );
};
