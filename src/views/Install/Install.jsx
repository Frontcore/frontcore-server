'use strict';

import React from 'react';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem, ButtonToolbar, Button } from 'react-bootstrap';
import './Install.less';

class Install extends React.Component {
  render() {
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
            <Navbar.Text>
              <strong>Installation Wizard</strong>
            </Navbar.Text>
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
          <p className="lead text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> installation wizard.</p>
          <p>
            This wizard guides you through installing this program and all required components. Be sure to carefully read and understand all the rights and restrictions described in the license terms. You must accept the license terms before you can install the software.
          </p>
          <hr/>
          {this.props.children}
          <hr/>
          <ButtonToolbar className="pull-right">
            <Button type="button">Cancel</Button>
            <Button type="button" disabled bsStyle="primary">Next</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
};

export default Install;
