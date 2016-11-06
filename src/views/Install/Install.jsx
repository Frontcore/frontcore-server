import React from 'react';
import { Button } from 'react-bootstrap';
import HorizontalNav from '../../components/Navbar/HorizontalNav.jsx';
import AlertBox from '../../components/AlertBox/AlertBox.jsx';
import Wizard, { Step } from '../../components/Wizard/Wizard.jsx';
import License from './License.jsx';
import Database from './Database.jsx';
import './Install.less';

export default class Install extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldAlert: false,
      alertType: "danger"
    };

    this.alertMsg = null;

    this.stepShouldChange = this.stepShouldChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
  }

  stepShouldChange() {
    let _hasValidateFunc = (typeof this.refs.stepFlow.validate === 'function') ? true : false;

    /**
     * If no validate function found then its assumed no form validation exist.
     */
    if (!_hasValidateFunc || this.refs.stepFlow.validate()) {
      return true;
    }

    return false;
  }

  onStepChange() {
    console.log('Step Completed');
  }

  render() {
    return (
      <div>
        <HorizontalNav />
        <div className="container">
          <h2 className="text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> setup wizard.</h2>
          <h4>This wizard guides you through installing initial user and database setup.</h4>
          <hr/>
        </div>
        <Wizard currentStep={1} stepShouldChange={this.stepShouldChange} onStepChange={this.onStepChange}>
          <Step stepNavigation="License">
            <License ref="stepFlow"/>
          </Step>
          <Step stepNavigation="Database">
            <Database ref="stepFlow"/>
          </Step>
        </Wizard>
      </div>
    );
  }
};
