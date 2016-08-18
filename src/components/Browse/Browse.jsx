'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Panel, Form, FormGroup, FormControl, Badge } from 'react-bootstrap';
import BrowseList from './BrowseList.jsx';
import Viewfile from './Viewfile.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as browseActions from '../../actions/browseActions';

class BrowseComponent extends React.Component {
  constructor(props) {
    super(props);

    this.browseRow = this.browseRow.bind(this);
    this.formatBytes = this.formatBytes.bind(this);
  }

  componentDidMount() {
    let browseData = {
      "browsePath": "/home/hegdeashwin/projects/elastic-hub"
    };
    this.props.actions.browseProjectDir(browseData);
  }

  formatBytes(bytes, decimals) {
     if(bytes == 0) return '0 Byte';
     var k = 1000; // or 1024 for binary
     var dm = decimals + 1 || 3;
     var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
     var i = Math.floor(Math.log(bytes) / Math.log(k));
     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  browseRow(browseEl, index) {
    let elIcon = (
      <td>
        <i className="fa fa-folder"></i> <Link to='elastic-hub/browse/source/src'><strong>{browseEl.name}</strong></Link>
      </td>
    );

    let elType = (
      <td>
        <span className="label label-default">Directory</span>
      </td>
    );

    let elSize = "";

    if(browseEl.isFile) {
      elIcon = (
        <td>
          <i className="fa fa-file-text"></i> <strong>{browseEl.name}</strong>
        </td>
      );

      elType = (
        <td>
          <span className="label label-default">File</span>
        </td>
      );

      elSize = this.formatBytes(browseEl.size);
    }

    return (
      <tr key={index}>
        {elIcon}
        {elType}
        <td><span className="label label-primary">{browseEl.extension}</span></td>
        <td>{elSize}</td>
      </tr>
    );
  }

  render() {
    let header = (
      <h3><i className="fa fa-folder-open"></i> Browse project files & directories</h3>
    );

    return (
      <Panel className="browse-component" header={header}>
        <table className="table">
          <tbody>
            {this.props.browse.map(this.browseRow)}
          </tbody>
        </table>
      </Panel>
    );
  }
};

// BrowseComponent.propTypes = {
//   browse: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state, ownProps) {
  return {
    browse: state.browse
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(browseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseComponent);
