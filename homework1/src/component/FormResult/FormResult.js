import React from "react";
import "./FormResult.css";

export class FormResult extends React.Component {
  render() {
    return (
      <div className="formResult">
        <h2>{this.props.fields.name} {this.props.fields.surname}</h2>
        <h5>Дата рождения:</h5>
        <div className="formLine">{this.props.fields.dateOfBirth}</div>
        <h5>Телефон:</h5>
        <div className="formLine">{this.props.fields.phoneNumber}</div>
        <h5>Сайт:</h5>
        <div className="formLine">{this.props.fields.website}</div>
        <h5>О себе:</h5>
        <div className="formLine">{this.props.fields.aboutYourself}</div>
        <h5>Стек технологий:</h5>
        <div className="formLine">{this.props.fields.techStack}</div>
        <h5>Описание последнего проекта:</h5>
        <div className="formLine">{this.props.fields.descriptionOfProject}</div>
      </div>
    );
  }
}
