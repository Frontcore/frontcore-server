'use strict';

import React from 'react';

import AlertBox from '../Alert/AlertBox.jsx';
import Dashboard from '../../views/Dashboard/Dashboard.jsx';
import Footer from '../Footer/Footer.jsx';

class MasterLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <AlertBox type="danger" msgTitle="Oh snap! You got an error!" msg="The connection was unable to initiate or complete a request with the Elasticsearch server." canClose="true" />
        <Dashboard />
        <Footer/>
      </div>
    );
  }
};

export default MasterLayout;
