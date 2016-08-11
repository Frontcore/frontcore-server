'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Panel, Form, FormGroup, FormControl, Badge } from 'react-bootstrap';
import BrowseList from './BrowseList.jsx';
import Viewfile from './Viewfile.jsx';

class Browse extends React.Component {
  render() {
    let header = (
      <h3><i className="fa fa-folder-open"></i> Browse project files & directories</h3>
    );

    return (
      <Panel className="browse-component" header={header}>
        <table className="table">
          <tbody>
            <tr>
              <td><i className="fa fa-folder"></i> <strong><Link to="elastic-hub/browse/source/src">src</Link></strong></td>
              <td><span className="label label-default">Directory</span></td>
              <td></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-folder"></i> <strong><Link to="elastic-hub/browse/source/config">config</Link></strong></td>
              <td><span className="label label-default">Directory</span></td>
              <td></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-folder"></i> <strong>server</strong></td>
              <td><span className="label label-default">Directory</span></td>
              <td></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-file-text"></i> <strong>scripts.js</strong></td>
              <td>
                <span className="label label-default">File</span>
              </td>
              <td><span className="label label-primary">JavaScript</span></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
                <td><i className="fa fa-file-text"></i> <strong>index.html</strong></td>
              <td>
                <span className="label label-default">File</span>
              </td>
              <td><span className="label label-primary">HTML 5</span></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-file-text"></i> <strong>style.css</strong></td>
              <td>
                <span className="label label-default">File</span>
              </td>
              <td><span className="label label-primary">CSS</span></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-file-text"></i> <strong>style.less</strong></td>
              <td>
                <span className="label label-default">File</span>
              </td>
              <td><span className="label label-primary">LESS</span></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-file-text"></i> <strong>package.json</strong></td>
              <td>
                <span className="label label-default">File</span>
              </td>
              <td><span className="label label-primary">JSON</span></td>
              <td>16 hours ago</td>
            </tr>
            <tr>
              <td><i className="fa fa-file-text"></i> <strong>README.md</strong></td>
              <td>
                <span className="label label-default">File</span>
              </td>
              <td><span className="label label-primary">Markdown</span></td>
              <td>16 hours ago</td>
            </tr>
          </tbody>
        </table>
      </Panel>
    );
  }
};

export default Browse;
