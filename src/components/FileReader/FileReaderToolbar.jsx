'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

class FileReaderToolbar extends React.Component {
  render() {
    let header = (
      <div>
        <span><i className="fa fa-file-text"></i> README.md</span>
        <ButtonGroup bsSize="small">
          <Button bsStyle="success">Edit</Button>
          <Button bsStyle="danger">Delete</Button>
        </ButtonGroup>
      </div>
    );

    return (
      <div className="file-reader-toolbar" header={header}>

      </div>
    );
  }
};

export default FileReaderToolbar;
