import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';
import AlertBox from '../../components/AlertBox/AlertBox.jsx';
import { Form, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import Validate from '../../utils/validation';
import './Login.less';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.alertMsg = null;

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.primaryFocus = this.primaryFocus.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      shouldAlert: false,
      alertType: "danger"
    };

    this.check = new Validate();
  }

  componentDidMount() {
    this.primaryFocus();
  }

  primaryFocus() {
    ReactDOM.findDOMNode(this.refs.username).focus();
  }

  onLoginSubmit(e) {
    e.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (!this.check.isEmpty(username) && !this.check.isEmpty(password)) {

      let unameConstraints = {
        username: { length: { minimum: 5 } }
      };

      let unameEl = {
        username: username
      };

      let pwdConstraints = {
        password: { length: { minimum: 8 } }
      };

      let pwdEl = {
        password: password
      };

      if (!this.check.isMinLenExpected(unameEl, unameConstraints) && !this.check.isMinLenExpected(pwdEl, pwdConstraints)) {
        this.alertMsg = (
          <div>
            <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
            <p>Username should be minimum 5 characters and Password should be minimum 8 characters</p>
          </div>
        );
        this.setState({
          shouldAlert: true
        });
      } else {
        // Todo: temp condition, will be removed later on
        if (username === "temp" && password === "temp") {
          this.setState({
            shouldAlert: false
          });
        } else {
          this.alertMsg = (
            <div>
              <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Authentication Error</h4>
              <p>Username or password seems to be incorrect. Please try again!</p>
            </div>
          );
          this.setState({
            shouldAlert: true
          });
        }
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

  resetState() {
    this.setState({
      shouldAlert: false
    });
  }

  render() {
    let header = (
      <p title="Frontcore v0.0.0 Alpha"><i className="fa fa-lg fa-sign-in" aria-hidden="true"></i> <strong>Login to Frontcore <sup><small>v0.0.0 Alpha</small></sup></strong></p>
    );

    const shouldAlert = this.state.shouldAlert;
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
                  <FormControl id="username" ref="username" onFocus={this.resetState} onBlur={this.hasMinExpectedLength} type="text" placeholder="Enter your frontcore username" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl id="password" ref="password" onFocus={this.resetState} type="password" placeholder="Enter your frontcore password" />
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

export default Login;
