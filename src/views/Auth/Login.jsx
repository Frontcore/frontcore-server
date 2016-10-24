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

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.primaryFocus = this.primaryFocus.bind(this);
  }

  componentDidMount() {
    this.primaryFocus();

    const username = this.refs.username.value;
    const password = this.refs.password.value;
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
      console.log('username or password is empty')
    }
  }

  render() {
    let header = (
      <p title="Frontcore v0.0.0 Alpha"><i className="fa fa-lg fa-sign-in" aria-hidden="true"></i> <strong>Login to Frontcore <sup><small>v0.0.0 Alpha</small></sup></strong></p>
    );

    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <PanelBox header={header}>
              <AlertBox type="danger">
                <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Authentication error</h4>
                <p>Incorrect username or password. Please try again!</p>
              </AlertBox>
              <Form>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl id="username" ref="username" type="text" placeholder="Enter your frontcore username" />
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
