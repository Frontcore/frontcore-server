import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, ButtonToolbar, Button } from 'react-bootstrap';
import HorizontalNav from '../../components/Navbar/HorizontalNav.jsx';
import EventEmitter from '../../utils/eventEmitter';
import './Install.less';

export default class Install extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      shouldContinueEnable: false
    };

    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    EventEmitter.on('should-continue-enable', (shouldContinueEnable) => {
      this.setState({
        shouldContinueEnable: shouldContinueEnable
      });
    });
  }

  componentWillUnmount() {
    EventEmitter.off('should-continue-enable');
  }

  redirectTo() {
    this.context.router.push('/install/database');
  }

  render() {
    return (
      <div>
        <HorizontalNav />
        <div className="container install-wizard-component">
          <h2 className="text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> setup wizard.</h2>
          <h4>
            This wizard guides you through installing initial user and database setup.
          </h4>
          <hr/>
          <div className="row">
            {this.props.children}
          </div>
          <hr/>
          <ButtonToolbar className="pull-right">
            <Button type="button" className="next-step" disabled={!this.state.shouldContinueEnable} bsStyle="primary" onClick={this.redirectTo}>Continue</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
};
