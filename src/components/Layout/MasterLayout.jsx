'use strict';

import React from 'react';

import AlertBox from '../Alert/AlertBox.jsx';
import TabList from '../Tabs/TabList.jsx';
import TabPaneContainer from '../Tabs/TabPaneContainer.jsx';
import Footer from '../Footer/Footer.jsx';

class MasterLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <AlertBox type="danger" msgTitle="Oh snap! You got an error!" msg="The connection was unable to initiate or complete a request with the Elasticsearch server." canClose="true" />
        <section className="super-tab-container">
          <div className="row">
            <div className="col-md-12 tab-area">
              <TabList/>
              <TabPaneContainer/>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
};

export default MasterLayout;
