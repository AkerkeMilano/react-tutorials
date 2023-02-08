import React from "react";
import "./App.css";
import { Input } from "./component/Input/Input";
import { TextAreaInput } from "./component/TextAreaInput/TextAreaInput";
import { Button } from "./component/Button/Button";
import { Error } from "./component/Error/Error";
import { TextValidator } from "./component/TextValidator/TextValidator";
import { FormResult } from "./component/FormResult/FormResult";
export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: "",
        surname: "",
        dateOfBirth: "",
        phoneNumber: "",
        website: "",
        aboutYourself: "",
        techStack: "",
        descriptionOfProject: "",
      },
      errors: {},
      openForm: true,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };
  validateInputs = () => {
    let errors = {};
    for (let key in this.state.fields) {
      if (this.state.fields[key].length === 0) {
        errors[key] = "Поле пустое. Заполните пожалуйста";
      }
    }

    Object.entries(this.state.fields)
      .slice(5, 7)
      .forEach((entry) => {
        if (this.state.fields[entry[0]].length > 600) {
          errors[entry[0]] = "Превышен лимит символов в поле";
        }
      });

    //name
    if (
      this.state.fields["name"].length > 0 &&
      !Boolean(this.state.fields["name"].charAt(0).match(/[A-ZА-ЯЁ]/))
    ) {
      errors["name"] =
        "Имя должно начинаться с заглавной буквы. Заполните пожалуйста правильно!";
    }
    //surname
    if (
      this.state.fields["surname"].length > 0 &&
      !Boolean(this.state.fields["surname"].charAt(0).match(/[A-ZА-ЯЁ]/))
    ) {
      errors["surname"] =
        "Фамилия должна начинаться с заглавной буквы. Заполните пожалуйста правильно!";
    }

    if (
      this.state.fields["website"].length > 0 &&
      !Boolean(this.state.fields["website"].startsWith("https://"))
    ) {
      errors["website"] = "Сайт должен начинаться на https://";
    }

    this.setState({ errors: errors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.validateInputs();
    if (Object.keys(this.state.errors).length === 0) {
      this.setState({ openForm: false });
    }
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.openForm ? (
            <form onSubmit={this.handleSubmit}>
              <h2>Создание анкеты:</h2>
              <Input
                name="name"
                label="Имя"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.name}
                placeholder="Введите Ваше имя"
              />
              {this.state.errors["name"] && (
                <Error>{this.state.errors["name"]}</Error>
              )}
              <Input
                name="surname"
                label="Фамилия"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.surname}
                placeholder="Введите Вашу фамилию"
              />
              {this.state.errors["surname"] && (
                <Error>{this.state.errors["surname"]}</Error>
              )}
              <Input
                name="dateOfBirth"
                label="Дата рождения"
                type="date"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.dateOfBirth}
                placeholder="Введите Дату рождения"
              />
              {this.state.errors["dateOfBirth"] && (
                <Error>{this.state.errors["dateOfBirth"]}</Error>
              )}
              <Input
                name="phoneNumber"
                type="tel"
                label="Телефон"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.phoneNumber}
                placeholder="Введите Ваш номер телефона в формате 7-7777-77-77"
                pattern="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"
                maxlength="14"
              />
              {this.state.errors["phoneNumber"] && (
                <Error>{this.state.errors["phoneNumber"]}</Error>
              )}
              <Input
                name="website"
                label="Сайт"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.website}
                placeholder="Введите сайт"
              />
              {this.state.errors["website"] && (
                <Error>{this.state.errors["website"]}</Error>
              )}
              <TextAreaInput
                name="aboutYourself"
                label="О себе"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.aboutYourself}
                placeholder="Введите информацию о себе"
                maxlength="600"
              />
              <TextValidator
                field={this.state.fields["aboutYourself"]}
                error={this.state.errors["aboutYourself"]}
              />
              <TextAreaInput
                name="techStack"
                label="Стек технологий"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.techStack}
                placeholder="Введите информацию про стек технологий"
              />
              <TextValidator
                field={this.state.fields["techStack"]}
                error={this.state.errors["techStack"]}
              />
              <TextAreaInput
                name="descriptionOfProject"
                label="Описание последнего проекта"
                handleChange={this.handleInputChange}
                inputValue={this.state.fields.descriptionOfProject}
                placeholder="Введите описание вашего последнего проекта"
              />
              <TextValidator
                field={this.state.fields["descriptionOfProject"]}
                error={this.state.errors["descriptionOfProject"]}
              />
              <div className="btns">
                <Button type="" title="Отмена" />
                <Button type="submit" title="Сохранить" />
              </div>
            </form>
          ) : (
            <FormResult fields={this.state.fields} />
          )}
        </div>
      </div>
    );
  }
}
