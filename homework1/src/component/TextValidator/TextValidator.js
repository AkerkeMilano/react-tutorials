import React from "react";
import { Error } from "../Error/Error";

export class TextValidator extends React.Component {
  render() {
    return (
      <>
        {this.props.field.length > 600 ? (
              <Error>Превышен лимит символов в поле</Error>
            ) : this.props.error ? (
              <Error>{this.props.error}</Error>
            ) : (
              <Error>
                Осталось {600 - this.props.field.length}/600
              </Error>
            )}
      </>
    );
  }
}
