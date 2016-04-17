'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';

import StyleClassUtils from '../../utils/styleclass.js';

class HorizontalMenu extends React.Component {
  constructor(props) {
    super(props);

    this.styleClass = new StyleClassUtils();

    this.openNavbarDropdown = this.openNavbarDropdown.bind(this);
    this.closeNavbarDropdown = this.closeNavbarDropdown.bind(this);
  };

  openNavbarDropdown(e) {
    e.stopPropagation();
    let navbarDropdown = document.querySelectorAll('.dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      self.styleClass.removeClass(navbarDropdown[i], 'open');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(e.target).parentNode.parentNode, 'open');
  };

  closeNavbarDropdown() {
    let navbarDropdown = document.querySelectorAll('.navbar-dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      self.styleClass.removeClass(navbarDropdown[i].parentElement, 'open');
    }
  };

  componentDidMount() {
    let navbarDropdown = document.querySelectorAll('.navbar-dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      navbarDropdown[i].addEventListener('click', self.openNavbarDropdown);
    }

    document.addEventListener('click', self.closeNavbarDropdown);
  };

  componentWillUnmount() {
    let navbarDropdown = document.querySelectorAll('.navbar-dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      navbarDropdown[i].removeEventListener('click', self.openNavbarDropdown);
    }
  };

  render() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <i className="fa fa-bars fa-lg"></i>
              </button>
              <IndexLink to="/" className="navbar-brand" title="Forkgen v0.0.0 Alpha">Forkgen <sup><small>v0.0.0 Alpha</small></sup></IndexLink>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li title="Home"><IndexLink to="/"><i className="fa fa-lg fa-home"></i></IndexLink></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle navbar-dropdown" data-toggle="dropdown" title="More Information, Help etc.">
                    <i className="fa fa-lg fa-life-saver"></i> Help<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li title="Documentation">
                      <a href="//github.com/hegdeashwin/forkgen/wiki" target="_blank">Documentation</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle navbar-dropdown" data-toggle="dropdown" title="Developers Connection"><i className="fa fa-connectdevelop fa-lg"></i> Developers<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li title="Github Home Page">
                      <a href="//github.com/hegdeashwin/forkgen" target="_blank">Github Home Page</a>
                    </li>
                    <li className="divider"></li>
                    <li title="Release Page">
                      <a href="//github.com/hegdeashwin/forkgen/releases" target="_blank">Release Page</a>
                    </li>
                    <li title="Milestones">
                      <a href="//github.com/hegdeashwin/forkgen/milestones" target="_blank">Milestones</a>
                    </li>
                    <li className="divider"></li>
                    <li title="Report Issues">
                      <a href="//github.com/hegdeashwin/forkgen/issues" target="_blank">Report Issues</a>
                    </li>
                    <li title="Pull Requests">
                      <a href="//github.com/hegdeashwin/forkgen/pulls" target="_blank">Open Pull Requests</a>
                    </li>
                    <li className="divider"></li>
                    <li title="About Forkgen">
                      <a href="//github.com/hegdeashwin/forkgen" target="_blank">About Forkgen</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
};

export default HorizontalMenu;
