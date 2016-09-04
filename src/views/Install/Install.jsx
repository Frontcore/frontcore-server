'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, router } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem, ButtonToolbar, Button } from 'react-bootstrap';
import EventEmitter from '../../utils/eventEmitter';
import './Install.less';

class Install extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 'license',
      hasAgree: false
    };

    this.redirectTo = this.redirectTo.bind(this);
  }

  componentWillMount() {
    EventEmitter.on('has-user-agreed', (hasAgree = false) => {
      this.setState({
        hasAgree: hasAgree
      })
    });
  }

  componentWillUnmount() {
    EventEmitter.off('has-user-agreed');
  }

  redirectTo() {
    this.setState({
      step: 'database'
    });
    // todo: redirect to #/install/database
  }

  render() {
    let disable = true;
    if(this.state.hasAgree) {
      disable = false;
    }

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" title="Frontcore v0.0.0 Alpha">Frontcore <sup><small>v0.0.0 Alpha</small></sup></IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown className="navbar-right" eventKey={4} title="Developers" id="menu-developers">
                <MenuItem eventKey={4.1} href="//github.com/Frontcore/frontcore" target="_blank">Github Home Page</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.2} href="//github.com/Frontcore/frontcore/releases" target="_blank">Release Page</MenuItem>
                <MenuItem eventKey={4.3} href="//github.com/Frontcore/frontcore/milestones" target="_blank">Milestones</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.4} href="//github.com/Frontcore/frontcore/issues" target="_blank">Report Issues</MenuItem>
                <MenuItem eventKey={4.5} href="//github.com/Frontcore/frontcore/pulls" target="_blank">Open Pull Requests</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.6} href="//github.com/Frontcore/frontcore" target="_blank">About Frontcore</MenuItem>
              </NavDropdown>
              <NavDropdown className="navbar-right" eventKey={5} title="Help" id="menu-help">
                <MenuItem eventKey={5.1} href="//github.com/Frontcore/frontcore/wiki" target="_blank">Documentation</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container install-wizard-component">
          <p className="lead text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> setup wizard.</p>
          <p>
            This wizard guides you through installing initial database setup. Be sure to carefully read and understand all the rights and restrictions described in the license terms. You must accept the license terms before you can install the software.
          </p>
          <hr/>
          {this.props.children}
          <hr/>
          <ButtonToolbar className="pull-right">
            <Button type="button" class="next-step" disabled={disable} bsStyle="primary" onClick={this.redirectTo}>Continue</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
};

export default Install;
