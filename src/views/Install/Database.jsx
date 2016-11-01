import React from 'react';
import EventEmitter from '../../utils/eventEmitter';
import { Form, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap';

class Database extends React.Component {
  constructor(props) {
    super(props);

    EventEmitter.emit('should-continue-enable', true);
  }

  render() {
    return (
      <div className="wizard-database">
        <div className="container database-component">
          <div className="row">
            <div className="col-md-12">
              <h5>You must fill up the before you can install and setup user and database for this software.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form>
                <FormGroup>
                  <ControlLabel>First name</ControlLabel>
                  <FormControl id="firstName" ref="firstName" onFocus={this.resetState} onBlur={this.hasMinExpectedLength} type="text" placeholder="E.g. Ashwin" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Last name</ControlLabel>
                  <FormControl id="lastName" ref="lastName" onFocus={this.resetState} type="text" placeholder="E.g. Hegde" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl id="email" ref="email" onFocus={this.resetState} type="text" placeholder="E.g. ashwin.hegde3@yahoo.com" />
                </FormGroup>
              </Form>
            </div>
            <div className="col-md-6">
              <Form>
                <FormGroup>
                  <ControlLabel>Username (note: minimum 5 characters)</ControlLabel>
                  <FormControl id="username" ref="username" onFocus={this.resetState} onBlur={this.hasMinExpectedLength} type="text" placeholder="E.g. hegdeashwin" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password (note: minimum 8 characters)</ControlLabel>
                  <FormControl id="password" ref="password" onFocus={this.resetState} type="password" placeholder="Should contain alphabets, number, symbols etc." />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Re-enter Password (note: must be same as Password)</ControlLabel>
                  <FormControl id="password" ref="password" onFocus={this.resetState} type="password" placeholder="Should contain alphabets, number, symbols etc." />
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
