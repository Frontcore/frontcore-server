'use strict';

import React from 'react';

import EventEmitter from '../../utils/eventEmitter';
import Browse from '../../components/Browse/Browse.jsx';
import TotalIssues from '../../components/TotalIssues/TotalIssues.jsx';

class Dashboard extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: false,
      text: 'Setup',
      linkTo: '#'
    }, {
      isActive: true,
      text: 'Dashboard'
    }]);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-6">
            <Browse />
          </div>
          <div className="col-md-6">
            <TotalIssues />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
