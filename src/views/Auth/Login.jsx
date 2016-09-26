import React from 'react';
import { Link } from 'react-router';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';
import { Form, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import './Login.less';

class Login extends React.Component {
  render() {
    let header = (
      <p title="Frontcore v0.0.0 Alpha"><i className="fa fa-sign-in" aria-hidden="true"></i> <strong>Login to Frontcore <sup><small>v0.0.0 Alpha</small></sup></strong></p>
    );

    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <PanelBox header={header}>
              <Form>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl id="username" type="text" placeholder="Enter your frontcore username" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl id="password" type="password" placeholder="Enter your frontcore password" />
                </FormGroup>
                <FormGroup>
                  <Checkbox>Keep me logged in</Checkbox>
                </FormGroup>
                <Button type="submit" bsStyle="primary">Login</Button>
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
