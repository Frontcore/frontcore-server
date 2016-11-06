import React from 'react';
import { Button } from 'react-bootstrap';
import HorizontalNav from '../../components/Navbar/HorizontalNav.jsx';
import Wizard, { Step } from '../../components/Wizard/Wizard.jsx';
import License from './License.jsx';
import Database from './Database.jsx';
import EventEmitter from '../../utils/eventEmitter';
import './Install.less';

export default class Install extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasValidateFail: false
    };
    this.stepShouldChange = this.stepShouldChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
  }

  stepShouldChange() {
    console.log("LOG: Install => Step Should Change");
    return true;
  }

  onStepChange(_stepCounter) {
    console.log('_stepCounter: ', _stepCounter);
  }

  render() {
    return (
      <div>
        <HorizontalNav />
        <Wizard currentStep={1} stepShouldChange={this.stepShouldChange} onStepChange={this.onStepChange}>
          <Step stepNavigation="License">
            <License/>
          </Step>
          <Step stepNavigation="Database">
            <Database/>
          </Step>
        </Wizard>
      </div>
    );
  }
};
