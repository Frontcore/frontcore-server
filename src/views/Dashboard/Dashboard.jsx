'use strict';

import React from 'react';

import EventEmitter from '../../utils/eventEmitter';

class Dashboard extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Dashboard'
    }]);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-12">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
