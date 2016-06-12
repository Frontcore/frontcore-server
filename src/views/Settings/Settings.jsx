'use strict';

import React from 'react';
import { Link } from 'react-router';
import SettingsSidebar from './SettingsSidebar.jsx';

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-container">
        <div className="row">
          <div className="col-md-3">
            <SettingsSidebar />
          </div>
          <div className="col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;
