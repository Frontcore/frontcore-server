'use strict';

import React from 'react';

import EventEmitter from '../../utils/eventEmitter';
import Browse from '../../components/Browse/Browse.jsx';
import FileReader from '../../components/FileReader/FileReader.jsx';

class BrowserFs extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: false,
      text: 'Setup',
      linkTo: '#'
    }, {
      isActive: false,
      text: 'Dashboard',
      linkTo: '#'
    }, {
      isActive: true,
      text: 'Browse File System'
    }]);
  }

  render() {
    return (
      <div className="browsefs-container">
        <div className="row">
          <div className="col-md-12">
            <Browse />
          </div>
          <div className="col-md-12">
            <FileReader />
          </div>
        </div>
      </div>
    );
  }
};

export default BrowserFs;
