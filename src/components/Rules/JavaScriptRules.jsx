import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './Rules.less';
import { Label, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rulesActions from '../../actions/rulesActions';

class JavaScriptRules extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.categoryRow = this.categoryRow.bind(this);
    this.ruleRow = this.ruleRow.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadRules();
  }

  ruleRow(data, index) {
    let hasRecommended = (
      <Label></Label>
    );

    let hasFixable = (
      <Label></Label>
    )

    if(data.recommended) {
      hasRecommended = (
        <Label bsStyle="success">Recommended</Label>
      );
    }

    if(data.fixable) {
      hasFixable = (
        <Label bsStyle="default">Fixable</Label>
      );
    }

    return (
      <a key={index} href="#" className="list-group-item">
        <span className="list-group-item-heading lead">
          {data.rule}
        </span>
        <span className="pull-right">
          {hasRecommended}
          {hasFixable}
        </span>
        <p className="list-group-item-text">{data.description}</p>
      </a>
    );
  }

  categoryRow(data, index) {
    let header = (
      <h3 onClick={() => this.setState({open: !this.state.open})}><strong>{data.category}</strong></h3>
    );
    return (
      <Panel header={header} collapsible eventKey={index}>
        <p className="category-desciption bg-primary">{data.description}</p>
        <div className="list-group">
          {data.rules.map(this.ruleRow)}
        </div>
      </Panel>
    );
  }

  render() {
    return (
      <div>
        {this.props.rules.map(this.categoryRow)}
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    rules: state.rules
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(rulesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JavaScriptRules);
