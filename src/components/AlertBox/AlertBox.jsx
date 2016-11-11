import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

/**
 * AlertBox class will return React-Bootstrap alert DOM structure.
 */
export default class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: this.props.showAlert
    };

    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  handleAlertDismiss() {
    this.setState({
      isVisible: false
    });
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }

    return (
      <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
        {this.props.children}
      </Alert>
    );
  }
};

AlertBox.propTypes = {
  type: React.PropTypes.string,
  showAlert: React.PropTypes.bool
};
