import React from "react";
import "./Button.css";
export class Button extends React.Component {
  render() {
    return (
      <button className="btn" type={this.props.type} onClick={this.props.onClick}>
        {this.props.title}
      </button>
    );
  }
}
