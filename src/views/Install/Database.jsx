import React from 'react';
import ReactDOM from 'react-dom';
import AlertBox from '../../components/AlertBox/AlertBox.jsx';
import Validate from '../../utils/validation';
import { Form, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap';

class Database extends React.Component {
  constructor(props) {
    super(props);

    this.alertMsg = null;

    this.state = {
      shouldAlert: false,
      alertType: "danger"
    };

    this.check = new Validate();

    this.primaryFocus = this.primaryFocus.bind(this);
    this.validate = this.validate.bind(this);
    this.resetAlertState = this.resetAlertState.bind(this);
  }

  componentDidMount() {
    this.primaryFocus();
  }

  primaryFocus() {
    ReactDOM.findDOMNode(this).querySelector("[name=firstName]").focus();
  }

  validate() {
    let _viewDOM = ReactDOM.findDOMNode(this);

    let _firstName = _viewDOM.querySelector("[name=firstName]").value;
    let _lastName = _viewDOM.querySelector("[name=lastName]").value;
    let _email = _viewDOM.querySelector("[name=email]").value;
    let _username = _viewDOM.querySelector("[name=username]").value;
    let _password = _viewDOM.querySelector("[name=password]").value;

    if (!this.check.isEmpty(_firstName) || !this.check.isEmpty(_lastName) || !this.check.isEmpty(_email) || !this.check.isEmpty(_username) || !this.check.isEmpty(_password)) {
      let _unameConstraints = {
        username: { length: { minimum: 5 } }
      };

      let _unameEl = {
        username: _username
      };

      let _emailConstraints = {
        email: { length: { minimum: 7 } }
      };

      let _emailEl = {
        email: _email
      };

      let _pwdConstraints = {
        password: { length: { minimum: 8 } }
      };

      let _pwdEl = {
        password: _password
      };

      if (!this.check.isMinLenExpected(_unameEl, _unameConstraints) || !this.check.isMinLenExpected(_pwdEl, _pwdConstraints) || !this.check.isMinLenExpected(_emailEl, _emailConstraints)) {
        this.alertMsg = (
          <div>
            <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
            <p>Username must be minimum 5 characters, Email must be minimum 7 characters and Password must be minimum 8 characters</p>
          </div>
        );
        this.setState({
          shouldAlert: true
        });
      } else {

        let _emailFormatConstraints = {
          email: {
            email: true
          }
        };

        let _emailEl = {
          email: _email
        };

        if (!this.check.isEmail(_emailEl, _emailFormatConstraints)) {
          this.alertMsg = (
            <div>
              <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
              <p>Email seems to be incorrect, Please try again!</p>
            </div>
          );
          this.setState({
            shouldAlert: true
          });
        } else {
          /**
           * Hit action and verify provided credentials with server
           */
          console.log('Hit Server and Register user and create default database with prestored values');
        }
      }

    } else {
      this.alertMsg = (
        <div>
          <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
          <p>Form fields cannot be empty and all for them are required fields. Please try again!</p>
        </div>
      );

      this.setState({
        shouldAlert: true
      });
    }

    return false;
  }

  resetAlertState() {
    this.setState({
      shouldAlert: false
    });
  }

  render() {
    const { shouldAlert } = this.state;
    const alertMsg = this.alertMsg;

    return (
      <div className="wizard-database">
        <div className="container database-component">
          {shouldAlert &&
            <AlertBox type={this.state.alertType} showAlert={this.state.shouldAlert}>
              {this.alertMsg}
            </AlertBox>
          }
          <div className="row">
            <div className="col-md-12">
              <h5>Please fill up below form for setup user and database to complete. <strong>All fields are required</strong>.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form>
                <FormGroup>
                  <ControlLabel>First name</ControlLabel>
                  <FormControl name="firstName" onBlur={this.resetAlertState} type="text" placeholder="E.g. Ashwin" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Last name</ControlLabel>
                  <FormControl name="lastName" onBlur={this.resetAlertState} type="text" placeholder="E.g. Hegde" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl name="email" onBlur={this.resetAlertState} type="text" placeholder="E.g. ashwin.hegde3@yahoo.com" />
                </FormGroup>
              </Form>
            </div>
            <div className="col-md-6">
              <Form>
                <FormGroup>
                  <ControlLabel>Username (note: minimum 5 characters)</ControlLabel>
                  <FormControl name="username" onBlur={this.resetAlertState} type="text" placeholder="E.g. hegdeashwin" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password (note: minimum 8 characters)</ControlLabel>
                  <FormControl name="password" onBlur={this.resetAlertState} type="password" placeholder="Should contain alphabets, number, symbols etc." />
                </FormGroup>
              </Form>
            </div>
          </div>
      </div>
      </div>
    );
  }
};

export default Database;
