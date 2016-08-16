'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './MyProjects.less';
import { Panel, Form, FormGroup, FormControl, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myProjectActions from '../../actions/myProjectsActions';

class MyProjectsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.myProjectRow = this.myProjectRow.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadMyProjects();
  }

  myProjectRow(project, index) {
    let buildLink = project.name + "/dashboard";
    return (
      <Link key={index} to={buildLink} className="list-group-item">
        <h4 className="list-group-item-heading">{project.name} <Label>v{project.version}</Label></h4>
        <p className="list-group-item-text">{project.description}</p>
        <p className="list-group-item-text project-location"><strong>Location: </strong>{project.location}</p>
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
            <FormControl type="text" placeholder="Filter your project by name, version or location"/>
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
