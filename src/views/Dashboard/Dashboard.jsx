import React, { PropTypes } from 'react';
import EventEmitter from '../../utils/eventEmitter.utils';
import TotalIssues from '../../components/TotalIssues/TotalIssues.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: false,
      text: 'Setup',
      linkTo: '#'
    }, {
      isActive: true,
      text: 'Dashboard'
    }]);

    this.props.actions.getProjectInfo({
      "id": this.props.params.projectid
    });
  }

  render() {
    let FilesStatisticsHeader = (
      <p><i className="fa fa-pie-chart"></i> Files statistics</p>
    );
    let actionMenu = (
      <i className="fa fa-lg fa-ellipsis-v"></i>
    );
    let graphActions = (
      <DropdownButton noCaret pullRight bsStyle="link" title={actionMenu}>
        <MenuItem eventKey="1">Print</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="2">Customize</MenuItem>
      </DropdownButton>
    );

    let LOCHeader = (
      <p><i className="fa fa-bar-chart"></i> Lines of code</p>
    );

    let LintErrorsHeader = (
      <p><i className="fa fa-bar-chart"></i> Lint errors</p>
    );

    return (
      <div className="dashboard-container">
        <div className="page-header">
          <h3 className="text-info">{this.props.project.name} <small className="text-info"><sup>v{this.props.project.version}</sup></small> - <small className="text-muted">{this.props.project.description}</small></h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <PanelBox actions={graphActions} header={FilesStatisticsHeader}>
              <h1>Data</h1>
            </PanelBox>
          </div>
          <div className="col-md-8">
            <PanelBox actions={graphActions} header={LOCHeader}>
              <h1>Data</h1>
            </PanelBox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PanelBox actions={graphActions} header={LintErrorsHeader}>
              <h1>Data</h1>
            </PanelBox>
          </div>
        </div>
      </div>
    );
  }
};

Dashboard.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    project: state.project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
