'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';

class MyProjects extends React.Component {
  render() {
    return (
      <Panel header="My Projects">
        <div className="list-group">
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elitrisus varius blandit.</p>
          </a>
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elitrisus varius blandit.</p>
          </a>
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elitrisus varius blandit.</p>
          </a>
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elitrisus varius blandit.</p>
          </a>
        </div>
      </Panel>
    );
  }
};

module.exports = MyProjects;
