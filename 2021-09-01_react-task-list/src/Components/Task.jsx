import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    return(
      <li>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.task }</p>
      </li>
    );
  }
}