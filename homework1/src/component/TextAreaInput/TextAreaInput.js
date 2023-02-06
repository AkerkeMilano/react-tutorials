import React from "react";
import "./TextAreaInput.css";

export class TextAreaInput extends React.Component {
  render() {
    return (
      <div className="TextAreaInput">
        <label>
          {this.props.label}
        </label>
        <textarea
            className="textArea"
            name={this.props.name}
            onChange={this.props.handleChange}
            value={this.props.inputValue}
            placeholder={this.props.placeholder}
            rows={7}
          />
      </div>
    );
  }
}
