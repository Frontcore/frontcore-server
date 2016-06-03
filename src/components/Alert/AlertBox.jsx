'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

/**
 * AlertBox class will return React-Bootstrap alert DOM structure.
 */
class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: false
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  handleAlertDismiss() {
    this.setState({
      alertVisible: false
    });
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
          {this.props.children}
        </Alert>
      );
    } else {
      return (<span></span>);
    }
  }
};

export default AlertBox;
