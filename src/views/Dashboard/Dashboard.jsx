'use strict';

import React from 'react';

import EventEmitter from '../../utils/eventEmitter';
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
          <div className="col-md-12">
            <TotalIssues />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
