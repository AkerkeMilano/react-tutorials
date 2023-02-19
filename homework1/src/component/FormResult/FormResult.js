import React from "react";
import "./FormResult.css";

export const FormResult = ({ fields }) => {
  return (
    <div className="formResult">
      <h2>
        {fields.name} {fields.surname}
      </h2>
      <h5>Дата рождения:</h5>
      <div className="formLine">{fields.dateOfBirth}</div>
      <h5>Телефон:</h5>
      <div className="formLine">{fields.phoneNumber}</div>
      <h5>Сайт:</h5>
      <div className="formLine">{fields.website}</div>
      <h5>О себе:</h5>
      <div className="formLine">{fields.aboutYourself}</div>
      <h5>Стек технологий:</h5>
      <div className="formLine">{fields.techStack}</div>
      <h5>Описание последнего проекта:</h5>
      <div className="formLine">{fields.descriptionOfProject}</div>
    </div>
  );
};
