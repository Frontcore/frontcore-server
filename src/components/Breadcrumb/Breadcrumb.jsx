'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './Breadcrumb.less';

import EventEmitter from '../../utils/eventEmitter';

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: [{
        text: 'Dashboard',
        isActive: true
      }]
    };
  }

  componentWillMount() {
    EventEmitter.on('update-breadcrumb-path', (path = this.state.path) => {
      this.setState({
        path: path
      });
    });
  }

  componentWillUnmount() {
    EventEmitter.off('update-breadcrumb-path');
  }

  render() {
    return (
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-lg fa-home"></i></a></li>
        {
          this.state.path.map((list, i) => {
             return (<li key={i}>{list.text}</li>);
          })
        }
      </ol>
    );
  }
}

export default Breadcrumb;
