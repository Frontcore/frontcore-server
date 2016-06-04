'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './Breadcrumb.less';

class Breadcrumb extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        <li className="active">Dashboard</li>
      </ol>
    );
  }
}

export default Breadcrumb;
