import React from 'react';
import { Panel } from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import Toolbar from './Toolbar.jsx';

import 'brace/mode/json';
import 'brace/theme/github';

let json = `{
  "query": {
    "match_all":{}
  }
}`;


class Viewfile extends React.Component {
  render() {
    return (
      <Panel header="\project\src\file.js">
        <Toolbar />
        <AceEditor mode="json" theme="github" name="paramsEditor" height="350px" fontSize={16} width="100%" value={json} editorProps={{$blockScrolling: true}} />
      </Panel>
    );
  }
};

export default Viewfile;
