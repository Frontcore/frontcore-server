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
    this.goFinish = this.goFinish.bind(this);
    this.wizardButtons = this.wizardButtons.bind(this);
    this.childContainer = this.childContainer.bind(this);
  }

  changeStep(_stepCounter) {
    if (this.props.stepShouldChange()) {
      this.setState({
        currentStep: _stepCounter
      });
      this.props.onStepChange();
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

  goFinish() {
    this.changeStep(this.state.currentStep);
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
    return (
      React.Children.map(_children, (child, index) => {
        let _stepNumber = index + 1;
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

  render() {
    let { currentStep } = this.state;
    let _children = this.props.children;

    return (
      <div className="container install-wizard">
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
  }
};

Wizard.propTypes = {
  currentStep: React.PropTypes.number,
  stepShouldChange: React.PropTypes.func,
  onStepChange: React.PropTypes.func,
};

Step.defaultProps = {
  stepCounter: 1
};
