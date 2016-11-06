import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export const Step = ({stepCounter, isActive, children}) => {
  return (
    <div className={stepCounter}>
      {isActive ? children : ''}
    </div>
  );
};

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: props.currentStep
    };

    this.hidden = {
      'display': 'none'
    };

    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.changeStep = this.changeStep.bind(this);
    this.wizardButtons = this.wizardButtons.bind(this);
    this.childContainer = this.childContainer.bind(this);

    // this.state = {
    //   showPrev: false,
    //   showNext: true,
    //   showFinish: false
    // };
    //
    // this.hidden = { 'display': 'none' };
    //
    // this.initStepFrom = this.props.initialStep || 1;
    // this.stepCounter = this.initStepFrom;
    //
    // this.totalSteps = this.props.steps.length;
    //
    // this.goPrevious = this.goPrevious.bind(this);
    // this.goNext = this.goNext.bind(this);
  }

  changeStep(_stepCounter) {
    if (this.props.stepShouldChange()) {
      this.setState({
        currentStep: _stepCounter
      });
      this.props.onStepChange(_stepCounter);
    }
  }

  goNext() {
    let _stepCounter = this.state.currentStep + 1;
    this.changeStep(_stepCounter);
  }

  goPrevious() {
    let _stepCounter = this.state.currentStep - 1;
    this.changeStep(_stepCounter);
  }

  wizardButtons(_currentStep, _stepLength) {
    let _isInitStep = (_currentStep === 1);
    let _isFinalStep = (_currentStep === _stepLength);

    return (
      <ButtonToolbar className="pull-right">
        <Button bsStyle="primary" onClick={this.goPrevious}
          disabled={_isInitStep}
          style={_isInitStep ? this.hidden : {}}>Previous</Button>

        <Button bsStyle="primary" onClick={this.goNext}
          disabled={_isFinalStep}
          style={_isFinalStep ? this.hidden : {}}>Next</Button>

        <Button bsStyle="primary" onClick={this.goFinish}
          disabled={_isInitStep}
          style={_isInitStep ? this.hidden : {}}>Finish</Button>
      </ButtonToolbar>
    );
  }

  childContainer(_currentStep, _children) {
    console.log(_currentStep);
    console.log(_children);

    return (
      React.Children.map(_children, (child, index) => {
        let _stepNumber = index + 1;
        let _isSibling = _currentStep + 1 === _stepNumber || _currentStep - 1 === _stepNumber;
        let _settings = {
          key: index,
          index,
          stepNumber: _stepNumber,
          isActive: _currentStep === _stepNumber
        };

        return (
          <child.type {..._settings}>
            {child.props.children}
          </child.type>
        );
      })
    );
  }

  //
  // incCounter() {
  //   return this.stepCounter = this.stepCounter + 1;
  // }
  //
  // decCounter() {
  //   return this.stepCounter = this.stepCounter - 1;
  // }
  //
  // goPrevious() {
  //   this.decCounter();
  //
  //   let _btnState = {
  //     showPrev: true,
  //     showNext: true,
  //     showFinish: false
  //   };
  //
  //   if (this.stepCounter === this.initStepFrom) {
  //     _btnState = {
  //       showPrev: false,
  //       showNext: true,
  //       showFinish: false
  //     };
  //   }
  //
  //   this.setState(_btnState);
  // }
  //
  // goNext() {
  //   this.incCounter();
  //
  //   let _btnState = {
  //     showPrev: true
  //   };
  //
  //   if (this.checkIfFinalStep()) {
  //     _btnState = {
  //       showPrev: true,
  //       showNext: false,
  //       showFinish: true
  //     };
  //   }
  //
  //   this.setState(_btnState);
  // }
  //
  // goFinish() {
  //   alert('Finish');
  // }
  //
  // checkIfFinalStep() {
  //   return (this.stepCounter >= this.totalSteps) ? true : false;
  // }

  render() {
    let { currentStep } = this.state;
    let _children = this.props.children;

    return (
      <div className="container install-wizard">
        <h2 className="text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> setup wizard.</h2>
        <h4>This wizard guides you through installing initial user and database setup.</h4>
        <div className="row">
          {
            this.childContainer(currentStep, _children)
          }
        </div>
        <hr/>
        {
          this.wizardButtons(currentStep, _children.length)
        }
      </div>
    );
    // return (
    //   <div className="container install-wizard">
    //     <h2 className="text-primary">Welcome to the Frontcore <sup><small>v0.0.0 Alpha</small></sup> setup wizard.</h2>
    //     <h4>
    //       This wizard guides you through installing initial user and database setup.
    //     </h4>
    //     <hr/>
    //     <div className="row">
    //       {this.props.steps[this.stepCounter - 1].step}
    //     </div>
    //     <hr/>
    //     <ButtonToolbar className="pull-right">
    //       <Button bsStyle="primary" style={this.state.showPrev ? {} : this.hidden} onClick={this.goPrevious}>Previous</Button>
    //       <Button bsStyle="primary" style={this.state.showNext ? {} : this.hidden} onClick={this.goNext}>Next</Button>
    //       <Button bsStyle="primary" style={this.state.showFinish ? {} : this.hidden} onClick={this.goFinish}>Finish</Button>
    //     </ButtonToolbar>
    //   </div>
    // );
  }
};

Wizard.propTypes = {
  currentStep: React.PropTypes.number,
  stepShouldChange: React.PropTypes.func,
  onStepChange: React.PropTypes.func
};

Step.defaultProps = {
  stepCounter: 1
};
