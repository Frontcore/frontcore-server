import React from 'react';
import Dropzone from 'react-dropzone';
import './CreateProject.less';
import { Button, Panel, Form, FormGroup, FormControl, ControlLabel, ProgressBar } from 'react-bootstrap';
import PanelBox from '../PanelBox/PanelBox.jsx';

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
      <p><i className="fa fa-plus" aria-hidden="true"></i> Create a new project</p>
    );

    return (
      <PanelBox noAction header={header} extendedClass="create-project-component">
        <Form>
          <FormGroup controlId="formControlsFile">
            <ControlLabel>Upload frontcore configuration JSON file:</ControlLabel>
            <Dropzone accept="application/json" multiple={false} className="dropzone-box" onDrop={this.onDrop}>
              <div className="lead dropzone-label">Try dropping file here, or click to select file to upload.</div>
            </Dropzone>
          </FormGroup>
          <ProgressBar now={60} />
          <Button type="submit" bsStyle="primary">Create Project</Button>
        </Form>
      </PanelBox>
    );
  }
};

module.exports = MyProjects;
