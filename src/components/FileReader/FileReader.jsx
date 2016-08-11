'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';
import FileReaderToolbar from './FileReaderToolbar.jsx';

class FileReader extends React.Component {
  render() {
    let header = (
      <h3><i className="fa fa-file-text"></i> README.md</h3>
    );

    return (
      <Panel className="browse-component" header={header}>
        <FileReaderToolbar />
        <hr/>
        <div className="browse-container">
          
        </div>
      </Panel>
    );
  }
};

export default FileReader;
