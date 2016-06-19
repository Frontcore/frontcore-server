'use strict';

import React from 'react';
import './Toolbar.less';
import { ButtonGroup, Button } from 'react-bootstrap';

class Toolbar extends React.Component {
  render() {
    return (
      <div className="toolbar-component">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    );
  }
};

export default Toolbar;
