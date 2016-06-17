'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Panel, Form, FormGroup, FormControl } from 'react-bootstrap';

class MyProjects extends React.Component {
  render() {
    let Projects = [{
      name: "Elastic-hub",
      describe: "An elasticsearch plugin",
      link: "/elastic-hub"
    }, {
      name: "Protocore",
      describe: "Front-end stack for jQuery projects",
      link: "/protocore"
    }];

    let header = (
      <h3>My projects</h3>
    );

    return (
      <Panel header={header}>
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
                  <h4 className="list-group-item-heading">{data.name}</h4>
                  <p className="list-group-item-text">{data.describe}</p>
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
