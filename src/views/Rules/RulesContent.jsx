'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Label, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class RulesContent extends React.Component {
  render() {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item">
          <span className="list-group-item-heading lead">no-cond-assign</span>
          <span className="pull-right">
            <Label bsStyle="primary">Best Practices</Label>&nbsp;
            <Label bsStyle="success">Recommended</Label>&nbsp;
            <Label bsStyle="default">Fixable</Label>
          </span>
          <p className="list-group-item-text">Disallow assignment operators in conditional expressions</p>
        </a>
      </div>
    );
  }
};

export default RulesContent;
