'use strict';

import React from 'react';

import AlertBox from '../Alert/AlertBox.jsx';
import Dashboard from '../../views/Dashboard/Dashboard.jsx';
import Footer from '../Footer/Footer.jsx';

class MasterLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <AlertBox type="danger">
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus</p>
        </AlertBox>
        <Dashboard />
        <Footer/>
      </div>
    );
  }
};

export default MasterLayout;
