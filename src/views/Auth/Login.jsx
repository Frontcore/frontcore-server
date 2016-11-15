import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'underscore';
import * as authenticateActions from '../../actions/authenticateActions';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';
import AlertBox from '../../components/AlertBox/AlertBox.jsx';
import { Form, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import Validate from '../../utils/validation.utils';
import Cookie from '../../utils/cookie.utils';
import './Login.less';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.alertMsg = null;

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.primaryFocus = this.primaryFocus.bind(this);
    this.resetAlertState = this.resetAlertState.bind(this);

    this.state = {
      shouldAlert: false,
      alertType: "danger"
    };

    this.check = new Validate();
    this.cookie = new Cookie();
  }

  componentDidMount() {
    this.primaryFocus();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.authenticate.success) {
      this.alertMsg = (
        <div>
          <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Authentication Error</h4>
          <p>{nextProps.authenticate.message}</p>
        </div>
      );
      this.setState({
        shouldAlert: true
      });
    } else {
      if (nextProps.authenticate.success) {
        let _options = {
          path: '/'
        };
        this.cookie.create('session', nextProps.authenticate.user.token, _options);
        this.props.history.replace('/');
      }
    }
  }

  primaryFocus() {
    ReactDOM.findDOMNode(this.refs.username).focus();
  }

  onLoginSubmit(e) {
    e.preventDefault();

    const _username = ReactDOM.findDOMNode(this.refs.username).value;
    const _password = ReactDOM.findDOMNode(this.refs.password).value;

    /**
     * Check if username and password are empty
     */
    if (!this.check.isEmpty(_username) || !this.check.isEmpty(_password)) {

      let _unameConstraints = {
        username: { length: { minimum: 5 } }
      };

      let _unameEl = {
        username: _username
      };

      let _pwdConstraints = {
        password: { length: { minimum: 8 } }
      };

      let _pwdEl = {
        password: _password
      };

      /**
       * Check if username and password full-fills minimum characters condition
       */
      if (!this.check.isMinLenExpected(_unameEl, _unameConstraints) || !this.check.isMinLenExpected(_pwdEl, _pwdConstraints)) {
        this.alertMsg = (
          <div>
            <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
            <p>Username must be minimum 5 characters and Password must be minimum 8 characters</p>
          </div>
        );
        this.setState({
          shouldAlert: true
        });
      } else {
        /**
         * Hit action and verify provided credentials with server
         */
        this.props.actions.login({
          "username": _username,
          "password": _password
        });
      }
    } else {
      this.alertMsg = (
        <div>
          <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
          <p>Username or password cannot be empty. Please try again!</p>
        </div>
      );
      this.setState({
        shouldAlert: true
      });
    }
  }

  resetAlertState() {
    if (this.state.shouldAlert) {
      this.setState({
        shouldAlert: false
      });
    }
  }

  render() {
    let header = (
      <p title="Frontcore v0.0.0 Alpha"><i className="fa fa-lg fa-sign-in" aria-hidden="true"></i> <strong>Login to Frontcore <sup><small>v0.0.0 Alpha</small></sup></strong></p>
    );

    const { shouldAlert } = this.state;
    const alertMsg = this.alertMsg;

    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <PanelBox header={header}>
              {shouldAlert &&
                <AlertBox type={this.state.alertType} showAlert={shouldAlert}>
                  {alertMsg}
                </AlertBox>
              }
              <Form>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl id="username" ref="username" onBlur={this.resetAlertState} type="text" placeholder="Enter your frontcore username" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl id="password" ref="password" onBlur={this.resetAlertState} type="password" placeholder="Enter your frontcore password" />
                </FormGroup>
                <Button type="submit" bsStyle="primary" onClick={this.onLoginSubmit}>Login</Button>
                <a href="//github.com/Frontcore/frontcore-documentation" target="_blank" className="btn btn-success pull-right">Help</a>
              </Form>
            </PanelBox>
          </div>
        </div>
    </div>
    );
  }
};

Login.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authenticate: state.authenticate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticateActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
