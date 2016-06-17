'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Form, FormGroup, FormControl } from 'react-bootstrap';
import BrowseList from './BrowseList.jsx';

class Browse extends React.Component {
  render() {
    let header = (
      <h3>Browse project files</h3>
    );

    return (
      <Panel className="browse-component" header={header}>
        <Form>
          <FormGroup>
            <FormControl type="text" placeholder="Filter the file" />
          </FormGroup>
        </Form>
        <BrowseList />
      </Panel>
    );
  }
};

export default Browse;
