import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class HorizontalMenu extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    cookie.remove('session', { path: '/' });
    this.context.router.push('/login');
  }

  render() {
    let _tools = (
      <span><i className="fa fa-lg fa-cogs" aria-hidden="true"></i> <span className="visible-xs-inline">Tools</span></span>
    );
    let _developers = (
      <span><i className="fa fa-lg fa-connectdevelop" aria-hidden="true"></i> <span className="visible-xs-inline">Developers</span></span>
    );
    let _help = (
      <span><i className="fa fa-lg fa-life-ring" aria-hidden="true"></i> <span className="visible-xs-inline">Help</span></span>
    );
    let _user = (
      <span><i className="fa fa-lg fa-user" aria-hidden="true"></i> <span className="visible-xs-inline">Logged in as Ashwin Hegde</span></span>
    );
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" title="Frontcore v0.0.0 Alpha">Frontcore <sup><small>v0.0.0 Alpha</small></sup></IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><i className="fa fa-lg fa-home"></i></NavItem>
            <NavDropdown eventKey={2} title={_tools} id="menu-tools">
              <MenuItem eventKey={2.1} href="#settings">Settings</MenuItem>
              <MenuItem eventKey={2.1} href="#rules">Rules</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavDropdown className="navbar-right" eventKey={3} title={_user}>
              <MenuItem eventKey={3.1} href="#settings/profile">Your Profile</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2} onClick={this.logout}>Logout</MenuItem>
            </NavDropdown>
            <NavDropdown className="navbar-right" eventKey={4} title={_developers}>
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
            <NavDropdown className="navbar-right" eventKey={5} title={_help}>
              <MenuItem eventKey={5.1}>Welcome</MenuItem>
              <MenuItem eventKey={5.2} href="//github.com/Frontcore/frontcore/wiki" target="_blank">Documentation</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.3} href="#feedback">Feedback</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default HorizontalMenu;
