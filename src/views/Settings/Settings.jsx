import React from 'react';
import EventEmitter from '../../utils/eventEmitter';
import { Link } from 'react-router';
import SettingsSidebar from './SettingsSidebar.jsx';

class Settings extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Settings'
    }]);
  }

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
