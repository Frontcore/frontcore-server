'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import FileReaderToolbar from './FileReaderToolbar.jsx';
import './FileReader.less';

class FileReader extends React.Component {
  render() {
    let header = (
      <div>
        <span><i className="fa fa-file-text"></i> README.md</span>
        <span className="file-reader-actions pull-right">
          <Button bsStyle="success" title="Edit"><i className="fa fa-lg fa-pencil"></i></Button>
          <Button bsStyle="primary" title="Print"><i className="fa fa-lg fa-print"></i></Button>
          <Button bsStyle="danger" title="Delete"><i className="fa fa-lg fa-trash-o"></i></Button>
        </span>
      </div>
    );

    let footer = (
      <div>
        <span>22 lines | 1.05 KB</span>
      </div>
    );

    return (
      <Panel className="file-reader-component" header={header} footer={footer}>

      </Panel>
    );
  }
};

export default FileReader;
