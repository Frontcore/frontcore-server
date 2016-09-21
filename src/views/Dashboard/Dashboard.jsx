import React, { PropTypes } from 'react';
import EventEmitter from '../../utils/eventEmitter';
import TotalIssues from '../../components/TotalIssues/TotalIssues.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';
import PanelBox from '../../components/PanelBox/PanelBox.jsx';

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
      <p className="lead"><i className="fa fa-pie-chart"></i> Files statistics</p>
    );

    let LOCHeader = (
      <p className="lead"><i className="fa fa-bar-chart"></i> Lines of code</p>
    );

    let LintErrorsHeader = (
      <p className="lead"><i className="fa fa-bar-chart"></i> Lint errors</p>
    );

    return (
      <div className="dashboard-container">
        <div class="page-header">
          <h4>Project: {this.props.project.name} <small><sup>v{this.props.project.version}</sup></small> - <small>{this.props.project.description}</small></h4>
        </div>
        <div className="row">
          <div className="col-md-4">
            <PanelBox header={FilesStatisticsHeader}>
              <h1>Data</h1>
            </PanelBox>
          </div>
          <div className="col-md-8">
            <PanelBox header={LOCHeader}>
              <h1>Data</h1>
            </PanelBox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PanelBox header={LintErrorsHeader}>
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
