import React from "react";
import "./InputLine.css";

export class InputLine extends React.Component {
  render() {
    return (
      <div className="InputLine">
        <label>
          {this.props.label}
        </label>
        <input
          className="inputStyle"
          name={this.props.name}
          type={this.props.type ? this.props.type : "text"}
          onChange={this.props.handleChange}
          value={this.props.inputValue}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
