import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

@inject("User") @observer
class Me extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-group">
        {this.props.children}
      </div>
    );
  }
}

export default Me;
