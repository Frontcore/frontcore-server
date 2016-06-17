'use strict';

import React from 'react';
import { Button, Panel, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class MyProjects extends React.Component {
  render() {
    let header = (
      <h3>Create a new project</h3>
    );

    return (
      <Panel header={header}>
        <Form>
          <FormGroup controlId="projectName">
            <ControlLabel>Specify the project name:</ControlLabel>
            <FormControl type="text" placeholder="E.g. frontcore"/>
          </FormGroup>
          <FormGroup controlId="projectName">
            <ControlLabel>Describe the project:</ControlLabel>
            <FormControl type="text" placeholder="E.g. A tool to understand technical debt in practice"/>
          </FormGroup>
          <FormGroup controlId="formControlsFile">
            <ControlLabel>Upload frontcore configuration file:</ControlLabel>
            <FormControl type="file" />
          </FormGroup>
          <Button type="submit" bsStyle="success">
            Create Project
          </Button>
        </Form>
      </Panel>
    );
  }
};

module.exports = MyProjects;
