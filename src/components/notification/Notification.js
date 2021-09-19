import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Notification extends Component {
  render() {
    return <div>{<h1>{this.props.title}</h1>}</div>;
  }
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
