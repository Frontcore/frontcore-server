'use strict';

import React from 'react';
import TileCounterStyle from './TileCounter.less'

class TileCounter extends React.Component {
  render() {
    return (
      <div className="panel panel-default text-center tile-stats-count">
        <div className="panel-body">
          <div className="col-md-2">
            <span className="count-title text-muted"><strong>Total Nodes</strong></span>
            <div className="count">1</div>
          </div>
          <div className="col-md-2">
            <span className="count-title text-muted"><strong>Total Data Nodes</strong></span>
            <div className="count">1</div>
          </div>
          <div className="col-md-2">
            <span className="count-title text-muted"><strong>Total Pending Tasks</strong></span>
            <div className="count">3</div>
          </div>
          <div className="col-md-2">
            <span className="count-title text-muted"><strong>Total Indices</strong></span>
            <div className="count">1</div>
          </div>
          <div className="col-md-2">
            <span className="count-title text-muted"><strong>Total Documents</strong></span>
            <div className="count">1</div>
          </div>
          <div className="col-md-2">
            <span className="count-title text-muted"><strong>Total Size</strong></span>
            <div className="count">350 KB</div>
          </div>
        </div>
      </div>
    );
  }
};

export default TileCounter;
