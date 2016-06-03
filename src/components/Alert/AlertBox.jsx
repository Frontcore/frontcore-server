'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

/**
 * AlertBox class will return React-Bootstrap alert DOM structure.
 */
let AlertBox = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  handleAlertDismiss() {
    this.setState({
      alertVisible: false
    });
  },

  handleAlertShow() {
    this.setState({
      alertVisible: true
    });
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
          {this.props.children}
        </Alert>
      );
    }
  }
});

export default AlertBox;
