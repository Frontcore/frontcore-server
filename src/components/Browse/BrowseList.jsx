'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import './Browse.less';

class Browse extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#link1"><Badge>42</Badge> \project\src\file.js</ListGroupItem>
        <ListGroupItem href="#link1"><Badge>42</Badge> \project\src\file.js</ListGroupItem>
        <ListGroupItem href="#link1"><Badge>42</Badge> \project\src\file.js</ListGroupItem>
        <ListGroupItem href="#link2"><Badge>42</Badge> \file.js</ListGroupItem>
      </ListGroup>
    );
  }
};

export default Browse;
