'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Form, FormGroup, FormControl } from 'react-bootstrap';
import BrowseList from './BrowseList.jsx';
import Viewfile from './Viewfile.jsx';

class Browse extends React.Component {
  render() {
    let header = (
      <h3>List of project files</h3>
    );

    return (
      <Panel className="browse-component" header={header}>
        <div className="col-md-4 pull-left-padding">
          <Form>
            <FormGroup>
              <FormControl type="text" placeholder="Filter the file" />
            </FormGroup>
          </Form>
          <BrowseList />
        </div>
        <div className="col-md-8 pull-right-padding">
          <Viewfile />
        </div>
      </Panel>
    );
  }
};

export default Browse;
