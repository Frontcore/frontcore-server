import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from '../../utils/eventEmitter';
import RulesSidebar from './RulesSidebar.jsx';

class Rules extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Rules'
    }]);
  }

  render() {
    return (
      <div className="rules-component">
        <div className="row">
          <div className="col-md-3">
            <RulesSidebar/>
          </div>
          <div className="col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

export default Rules;
