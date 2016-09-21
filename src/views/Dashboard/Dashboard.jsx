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
    return (
      <div className="dashboard-container">
        <div class="page-header">
          <h4>Project: {this.props.project.name} <small><sup>v{this.props.project.version}</sup></small> - <small>{this.props.project.description}</small></h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <PanelBox>
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
