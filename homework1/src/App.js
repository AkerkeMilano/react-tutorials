import React, { useState } from "react";
import "./App.css";
import { Input } from "./component/Input/Input";
import { TextAreaInput } from "./component/TextAreaInput/TextAreaInput";
import { Modal } from "./component/Modal/Modal";
import { Button } from "./component/Button/Button";
import { FormResult } from "./component/FormResult/FormResult";
import {
  validateCapitalLetter,
  validateEmail,
  validateTextLimit,
} from "./helpers";

const initialFieldValues = {
  name: "",
  surname: "",
  dateOfBirth: "",
  phoneNumber: "",
  website: "",
  aboutYourself: "",
  techStack: "",
  descriptionOfProject: "",
};

export const App = () => {
  const [fields, setFields] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormOpened, setFormOpened] = useState(false);
  const handleInputChange = (event) => {
    setFields((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const mapValidators = {
    name: validateCapitalLetter,
    surname: validateCapitalLetter,
    website: validateEmail,
    aboutYourself: validateTextLimit,
    techStack: validateTextLimit,
    descriptionOfProject: validateTextLimit,
  };

  const validateInputs = () => {
    let errors = {};
    let formIsValid = true;
    for (let key in fields) {
      if (!fields[key]) {
        errors[key] = "Поле пустое. Заполните пожалуйста";
      } else {
        for (let key in mapValidators) {
          errors[key] = mapValidators[key](fields[key]);
        }
      }
      if (errors[key]) {
        formIsValid = false;
      }
    }
    setErrors(errors);
    return formIsValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      setIsFormValid(true);
      setFormOpened(true);
    }
  };
  const resetForm = (event) => {
    event.preventDefault();
    setFields(initialFieldValues);
    setErrors({});
    setIsFormValid(false);
  };

  return (
    <div className="App">
      <div className="container">
        {!isFormValid ? (
          <form onSubmit={handleSubmit}>
            <h2>Создание анкеты:</h2>
            <Input
              name="name"
              label="Имя"
              handleChange={handleInputChange}
              inputValue={fields.name}
              placeholder="Введите Ваше имя"
              error={errors["name"]}
            />
            <Input
              name="surname"
              label="Фамилия"
              handleChange={handleInputChange}
              inputValue={fields.surname}
              placeholder="Введите Вашу фамилию"
              error={errors.surname}
            />
            <Input
              name="dateOfBirth"
              label="Дата рождения"
              type="date"
              handleChange={handleInputChange}
              inputValue={fields.dateOfBirth}
              placeholder="Введите Дату рождения"
              error={errors.dateOfBirth}
            />
            <Input
              name="phoneNumber"
              type="tel"
              label="Телефон"
              handleChange={handleInputChange}
              inputValue={fields.phoneNumber}
              placeholder="Введите Ваш номер телефона в формате 7-7777-77-77"
              pattern="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"
              maxlength="14"
              error={errors.phoneNumber}
            />
            <Input
              name="website"
              label="Сайт"
              handleChange={handleInputChange}
              inputValue={fields.website}
              placeholder="Введите сайт"
              error={errors.website}
            />
            <TextAreaInput
              name="aboutYourself"
              label="О себе"
              handleChange={handleInputChange}
              inputValue={fields.aboutYourself}
              placeholder="Введите информацию о себе"
              maxlength="600"
              error={errors.aboutYourself}
            />
            <TextAreaInput
              name="techStack"
              label="Стек технологий"
              handleChange={handleInputChange}
              inputValue={fields.techStack}
              placeholder="Введите информацию про стек технологий"
              error={errors.techStack}
            />
            <TextAreaInput
              name="descriptionOfProject"
              label="Описание последнего проекта"
              handleChange={handleInputChange}
              inputValue={fields.descriptionOfProject}
              placeholder="Введите описание вашего последнего проекта"
              error={errors.descriptionOfProject}
            />
            <div className="btns">
              <Button type="" title="Отмена" onClick={resetForm} />
              <Button type="submit" title="Сохранить" />
            </div>
          </form>
        ) : (
          <FormResult fields={fields} />
        )}
      </div>
      <Modal isOpened={isFormOpened} onClose={() => setFormOpened(false)}>
        Данные заполнены успешно!
      </Modal>
    </div>
  );
};
