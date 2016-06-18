'use strict';

import React from 'react';
import { Link } from 'react-router';
import './MyProjects.less';
import { Panel, Form, FormGroup, FormControl, Label } from 'react-bootstrap';

class MyProjects extends React.Component {
  render() {
    let Projects = [{
      name: "Elastic-hub",
      describe: "An elasticsearch plugin",
      version: "1.3.2",
      path: 'C:\\Project\\elastic-hub',
      link: "/elastic-hub"
    }, {
      name: "Protocore",
      describe: "Front-end stack for jQuery projects",
      version: "1.0.0",
      path: 'C:\\Project\\Protocore',
      link: "/protocore"
    }, {
      name: "Nebula",
      describe: "Front-end stack for Backbone.js projects",
      version: "4.5.3",
      path: 'C:\\Project\\Nebula',
      link: "/nebula"
    }];

    let header = (
      <h3>My projects</h3>
    );

    return (
      <Panel  className="my-projects-component" header={header}>
        <Form>
          <FormGroup controlId="filterProject">
            <FormControl type="text" placeholder="Filter your project"/>
          </FormGroup>
        </Form>
        <div className="list-group">
          {
            Projects.map((data, i) => {
              let buildLink = data.link + "/dashboard";
              return (
                <Link key={i} to={buildLink} className="list-group-item">
                  <h4 className="list-group-item-heading">{data.name} <Label>v{data.version}</Label></h4>
                  <p className="list-group-item-text">{data.describe}</p>
                  <p className="list-group-item-text project-location"><strong>Location: </strong>{data.path}</p>
                </Link>
              );
            })
          }
        </div>
      </Panel>
    );
  }
};

module.exports = MyProjects;
