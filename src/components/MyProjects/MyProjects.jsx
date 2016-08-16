'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './MyProjects.less';
import { Panel, Form, FormGroup, FormControl, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myProjectActions from '../../actions/myProjectsActions';

class MyProjectsComponent extends React.Component {
  componentDidMount() {
    this.props.actions.loadMyProjects();

    this.myProjectRow = this.myProjectRow.bind(this);
  }

  myProjectRow(myProject, index) {
    let buildLink = myProject.link + "/dashboard";
    return (
      <Link key={index} to={buildLink} className="list-group-item">
        <h4 className="list-group-item-heading">{myProject.name} <Label>v{myProject.version}</Label></h4>
        <p className="list-group-item-text">{myProject.describe}</p>
        <p className="list-group-item-text project-location"><strong>Location: </strong>{myProject.path}</p>
      </Link>
    );
  }

  render() {
    let header = (
      <h3>My projects</h3>
    );

    return (
      <Panel className="my-projects-component" header={header}>
        <Form>
          <FormGroup controlId="filterProject">
            <FormControl type="text" placeholder="Filter your project"/>
          </FormGroup>
        </Form>
        <div className="list-group">
          {this.props.myProjects.map(this.myProjectRow)}
        </div>
      </Panel>
    );
  }
};

MyProjectsComponent.propTypes = {
  myProjects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    myProjects: state.myProjects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(myProjectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjectsComponent);
