'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

require('./Tabs.less');

import StyleClassUtils from '../../utils/styleclass.js';

class TabList extends React.Component {
  constructor(props) {
    super(props);

    this.styleClass = new StyleClassUtils();

    this.detectTabPane = this.detectTabPane.bind(this);
    this.handleTabPaneLoad = this.handleTabPaneLoad.bind(this);
  };

  handleTabPaneLoad() {
    let SelectedTabPaneLink = this.detectTabPane();
    let SelectedTabPaneContent = this.detectTabPane(false);

    let tablink = document.getElementById('super-tab');
    let tabContent = document.getElementById('super-tab-content');
    let i = 0;

    var self = this;

    for(; i < tablink.children.length ; i++ ){
      self.styleClass.removeClass(tablink.children[i], 'active');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(SelectedTabPaneLink).parentNode, 'active');

    for(i = 0; i < tabContent.children.length ; i++ ){
      self.styleClass.removeClass(tabContent.children[i], 'in');
      self.styleClass.removeClass(tabContent.children[i], 'active');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(SelectedTabPaneContent), 'in');
    this.styleClass.addClass(ReactDOM.findDOMNode(SelectedTabPaneContent), 'active');

  };

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', this.handleTabPaneLoad);
    window.addEventListener('hashchange', this.handleTabPaneLoad);
  };

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.handleTabPaneLoad);
    window.removeEventListener('hashchange', this.handleTabPaneLoad);
  };

  detectTabPane(isTabLink = true, URLHash = window.location.hash) {
    if(URLHash.indexOf('nodes') !== -1) {
      return (isTabLink) ? document.getElementById('nodes-tab') : document.getElementById('nodes');
    } else if(URLHash.indexOf('indices') !== -1) {
      return (isTabLink) ? document.getElementById('indices-tab') : document.getElementById('indices');
    } else if(URLHash.indexOf('queries') !== -1) {
      return (isTabLink) ? document.getElementById('queries-tab') : document.getElementById('queries');
    } else if(URLHash.indexOf('restapi') !== -1) {
      return (isTabLink) ? document.getElementById('restapi-tab') : document.getElementById('restapi');
    } else {
      return (isTabLink) ? document.getElementById('cluster-tab') : document.getElementById('cluster');
    }
  };

  render() {
    return (
      <ul id="super-tab" className="nav nav-tabs super-tab-component">
        <li className="active">
          <Link to="/cluster" id="cluster-tab" data-toggle="tab"><i className="fa fa-server fa-lg"></i> Cluster</Link>
        </li>
        <li>
          <Link to="/nodes" id="nodes-tab" data-toggle="tab"><i className="fa fa-cubes fa-lg"></i> Nodes</Link>
        </li>
        <li>
          <Link to="/indices" id="indices-tab" data-toggle="tab"><i className="fa fa-th-list fa-lg"></i> Indices</Link>
        </li>
        <li>
          <Link to="/queries" id="queries-tab" data-toggle="tab"><i className="fa fa-terminal fa-lg"></i> Queries</Link>
        </li>
        <li>
          <Link to="/restapi" id="restapi-tab" data-toggle="tab"><i className="fa fa-code fa-lg"></i> REST API</Link>
        </li>
      </ul>
    );
  }
};

export default TabList;
