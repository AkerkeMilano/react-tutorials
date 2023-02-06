import React from "react";
import './App.css';
import { InputLine } from "./component/InputLine/InputLine";
import { TextAreaInput } from "./component/TextAreaInput/TextAreaInput";
import { Button } from "./component/Button/Button";

export class App extends React.Component {
  state = {
    name: '',
    surname: '',
    dateOfBirth: '',
    phoneNumber: '',
    website: '',
    aboutYourself: '',
    techStack: '',
    descriptionOfProject: '',
  }
  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <h2>Введите информацию о себе:</h2>
          <InputLine name="name" label="Имя" handleChange={this.handleInputChange} inputValue={this.state.name} placeholder="Введите Ваше имя"/>
          <InputLine name="surname" label="Фамилия" handleChange={this.handleInputChange} inputValue={this.state.surname} placeholder="Введите Вашу фамилию"/>
          <InputLine name="dateOfBirth" label="Дата рождения" type="date" handleChange={this.handleInputChange} inputValue={this.state.dateOfBirth} placeholder="Введите Дату рождения"/>
          <InputLine name="phoneNumber" label="Телефон" handleChange={this.handleInputChange} inputValue={this.state.phoneNumber} placeholder="Введите Ваш номер телефона" />
          <InputLine name="website" label="Сайт" handleChange={this.handleInputChange} inputValue={this.state.website} placeholder="Введите сайт" />
          <TextAreaInput name="aboutYourself" label="О себе" handleChange={this.handleInputChange} inputValue={this.state.aboutYourself} placeholder="Введите информацию о себе" />
          <TextAreaInput name="techStack" label="Стек технологий" handleChange={this.handleInputChange} inputValue={this.state.techStack} placeholder="Введите информацию про стек технологий" />
          <TextAreaInput name="descriptionOfProject" label="Описание последнего проекта" handleChange={this.handleInputChange} inputValue={this.state.descriptionOfProject} placeholder="Введите описание вашего последнего проекта"/>
          <div className="btns">
            <Button title="Отмена"/>
            <Button title="Сохранить"/>
          </div>
      </div>
      </div>
    )
  }
}