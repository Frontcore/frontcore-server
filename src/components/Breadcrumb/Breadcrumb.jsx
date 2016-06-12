'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './Breadcrumb.less';

class Breadcrumb extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-lg fa-home"></i></a></li>
        <li className="active">Project Setup</li>
      </ol>
    );
  }
}

export default Breadcrumb;
