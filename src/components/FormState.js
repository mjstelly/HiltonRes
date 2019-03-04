import React, {Component} from "react";

export class FormState extends Component {
  state = {};

  onChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { children } = this.props;
    if (!children) return null;
    return children({
      values: this.state,
      onChange: this.onChange
    });
  }
}