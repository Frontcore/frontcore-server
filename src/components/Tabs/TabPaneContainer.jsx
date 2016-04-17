'use strict';

import React from 'react';

import ClusterTabPane from '../../views/Cluster/ClusterTabPane.jsx';

class TabPaneContainer extends React.Component {
  render() {
    return (
      <div id="super-tab-content" className="tab-content">
        <div className="tab-pane fade active in" id="cluster">
          <ClusterTabPane />
        </div>
      </div>
    );
  }
};

export default TabPaneContainer;
