import React from 'react';
import { Link } from 'react-router';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import './Login.less';

class ForgotPassword extends React.Component {
  render() {
    let header = (
      <p title="Frontcore v0.0.0 Alpha"><i className="fa fa-sign-in" aria-hidden="true"></i> <strong>Frontcore <sup><small>v0.0.0 Alpha</small></sup> Password Recovery</strong></p>
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
                <Button type="submit" bsStyle="primary">Recover Password</Button>
                <Link to="login" className="btn btn-default pull-right">Already have an account? Login</Link>
              </Form>
            </PanelBox>
          </div>
        </div>
    </div>
    );
  }
};

export default ForgotPassword;
