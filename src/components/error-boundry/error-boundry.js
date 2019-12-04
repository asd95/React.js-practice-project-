import React, { Component } from "react";
import ErrorMessage from "../error-message";

export default class ErrorBoundry extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}
