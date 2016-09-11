'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './MyProjects.less';
import { Panel, Form, FormGroup, FormControl, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myProjectsActions from '../../actions/myProjectsActions';

class MyProjectsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.myProjectRow = this.myProjectRow.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadMyProjects();
  }

  myProjectRow(project, index) {
    let buildLink = project._id + "/dashboard";
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
      <h3><strong>My projects</strong></h3>
    );

    let listGroupWrapper = (
      <div>
        <Form>
          <FormGroup controlId="filterProject">
            <FormControl type="text" placeholder="Filter your project by name, version or location"/>
          </FormGroup>
        </Form>
        <div className="list-group">
          {this.props.myProjects.map(this.myProjectRow)}
        </div>
      </div>
    );

    if(!this.props.myProjects.length) {
      listGroupWrapper = (
        <div className="bg-info">
          <p>Since you are able to read this, it means that you have successfully started your Frontcore server.</p>
          <p>This also means that you have not yet created any project. So here are a few pointers for your next step:</p>
          <ol>
            <li>Create <strong>frontcore.json</strong> configuration on your project root directory using <a href="//github.com/Frontcore/frontcore-cli" target="_blank"><strong>frontcore-cli</strong></a> tool.</li>
            <li>Upload that generated frontcore.json file using "Create a new project" component and create your project.</li>
          </ol>
          Learn more about <a href="#" target="_blank"><strong>how to create new project?</strong></a>
        </div>
      );
    }

    return (
      <Panel className="my-projects-component" header={header}>
        {listGroupWrapper}
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
    actions: bindActionCreators(myProjectsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjectsComponent);
