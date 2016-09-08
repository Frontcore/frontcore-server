'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from '../../utils/eventEmitter';

class Rules extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Rules'
    }]);
  }

  render() {
    return (
      <div className="rules-component">
        <p className="lead">
          Rules
        </p>
      </div>
    );
  }
};

export default Rules;
