'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

class FileReaderToolbar extends React.Component {
  render() {
    let header = (
      <h3><i className="fa fa-file-text"></i> README.md</h3>
    );

    return (
      <div className="file-reader-toolbar">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    );
  }
};

export default FileReaderToolbar;
