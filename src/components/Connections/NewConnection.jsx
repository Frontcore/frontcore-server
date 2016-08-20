'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class NewConnection extends React.Component {
  render() {
    let header = (
      <h3>Create a new MongoDB connection</h3>
    );

    return (
      <Panel className="new-connection-component" header={header}>
        <Form>
          <div className="col-md-6">
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Connection name:</ControlLabel>
              <FormControl type="text" placeholder="Enter text" />
            </FormGroup>
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Port:</ControlLabel>
              <FormControl type="text" defaultValue="27017" placeholder="Enter text" />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Hostname:</ControlLabel>
              <FormControl type="text" defaultValue="127.0.0.1" placeholder="Enter text" />
            </FormGroup>
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Database name:</ControlLabel>
              <FormControl type="text" defaultValue="frontcoredb" placeholder="Enter text" />
            </FormGroup>
          </div>
          <hr/>

          <div className="col-md-12">
            <Button type="submit" bsStyle="primary">Connect</Button>
            <Button type="submit" bsStyle="default">Advanced Settings</Button>
          </div>
        </Form>
      </Panel>
    );
  }
};

export default NewConnection;
