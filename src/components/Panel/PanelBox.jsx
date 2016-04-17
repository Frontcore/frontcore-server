import React from 'react';
import classNames from 'classnames';

require('./PanelBox.less');

class PanelBox extends React.Component {
  constructor() {
    super();

    this.state = {
      'isCollapse': false,
      'isCollapseIcon': 'fa-chevron-up',
      'isCollapseTitle': 'Minimize'
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      'isCollapse': !this.state.isCollapse,
      'isCollapseIcon': (!this.state.isCollapse) ? 'fa-chevron-down' : 'fa-chevron-up',
      'isCollapseTitle': (!this.state.isCollapse) ? 'Maximize': 'Minimize'
    });
  }

  render() {

    let panelBodyClassName = {
      'panel-body': true,
      'collapse': true,
      'in': !this.state.isCollapse
    };

    let toggleCollapseButtonIcon = {
      'fa': true,
      'fa-lg': true
    };

    toggleCollapseButtonIcon[this.state.isCollapseIcon] = true;

    panelBodyClassName = classNames(panelBodyClassName);
    toggleCollapseButtonIcon = classNames(toggleCollapseButtonIcon);

    return (
      <div className="panel panel-default">
        <div className="panel-heading" onDoubleClick={this.toggleCollapse}>
          <span className="panel-title" dangerouslySetInnerHTML={{__html: this.props.title}}></span>
          <div className="panel-toolbar btn-group pull-right">
            <button type="button" onClick={this.toggleCollapse} title={this.state.isCollapseTitle} className="btn btn-sm btn-default"><i className={toggleCollapseButtonIcon}></i></button>
          </div>
        </div>
        <div className={panelBodyClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default PanelBox;
