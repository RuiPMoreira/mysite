import React, { Component } from 'react';

import "../Area.css";

export default class Area extends Component {
  render() {
    const {title, bgColor} = this.props;
    return (
      <div className="area" style={{backgroundColor: bgColor}}>
        <div className="title">{title}</div>
        {this.props.children}
      </div>
    );
  }
}
//<div className="area-title" style={{backgroundColor: bgColor}}>{title}</div>
/*<div class="titles">
            <h4 class="title text-uppercase mb-4 pb-4">Latest News &amp; Blog</h4>
            <span></span>
        </div>*/