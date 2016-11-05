import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPrev: false,
      showNext: true,
      showFinish: false
    };

    this.hidden = { 'display': 'none' };

    this.initStepFrom = this.props.initialStep || 1;
    this.stepCounter = this.initStepFrom;

    this.totalSteps = this.props.steps.length;

    this.goPrevious = this.goPrevious.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  incCounter() {
    return this.stepCounter = this.stepCounter + 1;
  }

  decCounter() {
    return this.stepCounter = this.stepCounter - 1;
  }

  goPrevious() {
    this.decCounter();

    let _btnState = {
      showPrev: true,
      showNext: true,
      showFinish: false
    };

    if (this.stepCounter === this.initStepFrom) {
      _btnState = {
        showPrev: false,
        showNext: true,
        showFinish: false
      };
    }

    this.setState(_btnState);
  }

  goNext() {
    this.incCounter();

    let _btnState = {
      showPrev: true
    };

    if (this.checkIfFinalStep()) {
      _btnState = {
        showPrev: true,
        showNext: false,
        showFinish: true
      };
    }

    this.setState(_btnState);
  }

  goFinish() {
    alert('Finish');
  }

  checkIfFinalStep() {
    return (this.stepCounter >= this.totalSteps) ? true : false;
  }

  render() {
    return (
      <div className="container install-wizard">
        <h2 className="text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> setup wizard.</h2>
        <h4>
          This wizard guides you through installing initial user and database setup.
        </h4>
        <hr/>
        <div className="row">
          {this.props.steps[this.stepCounter - 1].step}
        </div>
        <hr/>
        <ButtonToolbar className="pull-right">
          <Button bsStyle="primary" style={this.state.showPrev ? {} : this.hidden} onClick={this.goPrevious}>Previous</Button>
          <Button bsStyle="primary" style={this.state.showNext ? {} : this.hidden} onClick={this.goNext}>Next</Button>
          <Button bsStyle="primary" style={this.state.showFinish ? {} : this.hidden} onClick={this.goFinish}>Finish</Button>
        </ButtonToolbar>
      </div>
    );
  }
};
