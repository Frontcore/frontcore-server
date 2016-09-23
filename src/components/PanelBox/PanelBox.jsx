import React from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';

class PanelBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hasAction = (
      <span className="pull-right">
        {this.props.actions}
      </span>
    );

    if(this.props.noAction) {
      hasAction = "";
    }

    let header = (
      <div>
        {hasAction}
        {this.props.header}
      </div>
    );

    return (
      <Panel header={header} className={this.props.extendedClass}>
        {this.props.children}
      </Panel>
    )
  }
};

export default PanelBox;
