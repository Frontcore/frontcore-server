import React from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';

class PanelBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dropAction = (
      <i className="fa fa-lg fa-ellipsis-v"></i>
    );

    let header = (
      <div>
        <span className="pull-right">
          <DropdownButton noCaret pullRight bsStyle="link" id="panelDropdown" title={dropAction}>
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </span>
        <p className="lead"><i className="fa fa-pie-chart"></i> Statistics</p>
      </div>
    );

    return (
      <Panel header={header}>
        {this.props.children}
      </Panel>
    )
  }
};

export default PanelBox;
