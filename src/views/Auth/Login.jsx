import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';
import AlertBox from '../../components/AlertBox/AlertBox.jsx';
import { Form, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import './Login.less';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.alertMsg = null;

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.primaryFocus = this.primaryFocus.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      shouldAlert: false,
      alertType: "danger"
    };
  }

  componentDidMount() {
    this.primaryFocus();
  }

  isNotEmpty(elVal) {
    if(elVal === '') {
      return false;
    }
    return true;
  }

  primaryFocus() {
    ReactDOM.findDOMNode(this.refs.username).focus();
  }

  onLoginSubmit(e) {
    e.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (this.isNotEmpty(username.trim()) && this.isNotEmpty(password)) {
      console.log('Sending ' + username + ' & ' + password);
    } else {
      this.alertMsg = (
        <div>
          <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application error</h4>
          <p>Username or password cannot be empty. Please try again!</p>
        </div>
      );
      this.setState({
        shouldAlert: true
      });
    }
  }

  onInputChange() {
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
                  <FormControl id="username" ref="username" onChange={this.onInputChange} type="text" placeholder="Enter your frontcore username" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl id="password" ref="password" type="password" placeholder="Enter your frontcore password" />
                </FormGroup>
                <FormGroup>
                  <Checkbox>Keep me logged in</Checkbox>
                </FormGroup>
                <Button type="submit" bsStyle="primary" onClick={this.onLoginSubmit}>Login</Button>
                <Link to="forgotpwd" className="btn btn-default pull-right">Forgot Password?</Link>
              </Form>
            </PanelBox>
          </div>
        </div>
    </div>
    );
  }
};

export default Login;
