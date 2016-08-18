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
  }

  componentDidMount() {
    this.props.actions.browseProjectDir();
  }

  browseRow(browseEl, index) {
    return (
      <tr key={index}>
        <td><i className="fa fa-file-text"></i> <strong>{browseEl.name}</strong></td>
        <td>
          <span className="label label-default">File</span>
        </td>
        <td><span className="label label-primary">JavaScript</span></td>
        <td>{browseEl.size}</td>
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
