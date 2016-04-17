'use strict';

import React from 'react';
import AlertBox from '../../components/Alert/AlertBox.jsx';
import PanelBox from '../../components/Panel/PanelBox.jsx';
import TileCounter from './TileCounter.jsx';
import ShardsStatistics from './ShardsStatistics.jsx';

class ClusterTabPane extends React.Component {
  render() {
    return (
      <div className="clusters-container">
        <AlertBox type="warning" msg="<i class='fa fa-heartbeat fa-lg'></i> Cluster '<strong>es-demo</strong>' status is '<strong>Yellow</strong>'. The primary shard is allocated but replicas are not." canClose="false" />

        <div className="row">
          <div className="col-md-12">
            <TileCounter />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <PanelBox title="<i class='fa fa-lg fa-pie-chart'></i> Shards Statistics" hasToolbar="true">
              <ShardsStatistics/>
            </PanelBox>
          </div>
        </div>
      </div>
    );
  }
};

export default ClusterTabPane;
