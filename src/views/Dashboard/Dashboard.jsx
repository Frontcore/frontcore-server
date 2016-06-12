'use strict';

import React from 'react';
import MyProjects from '../../components/MyProjects/MyProjects.jsx';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <MyProjects />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
