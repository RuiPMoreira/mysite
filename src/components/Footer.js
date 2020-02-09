import React, { Component } from 'react';

import "../Footer.css";

export default class Footer extends Component {
  render() {
    const {title, bgColor} = this.props;
    return (
      <div className="footer">
        <div className="footer-title">{title}</div>
        {this.props.children}
      </div>
    );
  }
}