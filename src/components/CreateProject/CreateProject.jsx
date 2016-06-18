'use strict';

import React from 'react';
import Dropzone from 'react-dropzone';
import './CreateProject.less';
import { Button, Panel, Form, FormGroup, FormControl, ControlLabel, ProgressBar } from 'react-bootstrap';

class MyProjects extends React.Component {
  constructor() {
    super();

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    console.log('Received files: ', files);
  }

  render() {
    let header = (
      <h3>Create a new project</h3>
    );

    return (
      <Panel className="create-project-component" header={header}>
        <Form>
          <FormGroup controlId="formControlsFile">
            <ControlLabel>Upload frontcore configuration JSON file:</ControlLabel>
            <Dropzone accept="application/json" multiple={false} className="dropzone-box" onDrop={this.onDrop}>
              <div className="lead dropzone-label">Try dropping file here, or click to select file to upload.</div>
            </Dropzone>
          </FormGroup>
          <ProgressBar now={60} />
          <Button type="submit" bsStyle="success">
            Create Project
          </Button>
        </Form>
      </Panel>
    );
  }
};

module.exports = MyProjects;
