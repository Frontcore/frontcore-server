'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import './Browse.less';

class Browse extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#elastic-hub/browse?loc='\src'"><i className="fa fa-folder"></i> <strong><Link to="#">src</Link></strong></ListGroupItem>
        <ListGroupItem href="#elastic-hub/browse?loc='\config'"><i className="fa fa-folder"></i> <strong>config</strong></ListGroupItem>
        <ListGroupItem href="#elastic-hub/browse?loc='\server'"><i className="fa fa-folder"></i> <strong>server</strong></ListGroupItem>
        <ListGroupItem href="#elastic-hub/browse?loc='\package.json'"><i className="fa fa-file-text"></i> <strong>package.json</strong><Badge>42</Badge></ListGroupItem>
        <ListGroupItem href="#elastic-hub/browse?loc='\README.md'"><i className="fa fa-file-text"></i> <strong>README.md</strong></ListGroupItem>
      </ListGroup>
    );
  }
};

export default Browse;
