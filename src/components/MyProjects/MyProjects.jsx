'use strict';

import React from 'react';
import { Panel, Form, FormGroup, FormControl } from 'react-bootstrap';

class MyProjects extends React.Component {
  render() {
    let Projects = [{
      name: "Elastic-hub",
      describe: "An elasticsearch plugin"
    }, {
      name: "Protocore",
      describe: "Front-end stack for jQuery projects"
    }];

    return (
      <Panel header="My Projects">
        <Form>
        <FormGroup controlId="filterProject">
          <FormControl type="text" placeholder="Filter your project"/>
        </FormGroup>
      </Form>
        <div className="list-group">
          {
            Projects.map((data, i) => {
              return (
                <a key={i} href="#" className="list-group-item">
                  <h4 className="list-group-item-heading">{data.name}</h4>
                  <p className="list-group-item-text">{data.describe}</p>
                </a>
              );
            })
          }
        </div>
      </Panel>
    );
  }
};

module.exports = MyProjects;
