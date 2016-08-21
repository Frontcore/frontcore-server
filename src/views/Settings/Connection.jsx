'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NewConnection from '../../components/Connections/NewConnection.jsx';
import ConnectionList from '../../components/Connections/ConnectionList.jsx';

class MongoConf extends React.Component {
  render() {
    return (
      <div class="row">
        <NewConnection />
        <ConnectionList />
      </div>
    );
  }
};

export default MongoConf;
