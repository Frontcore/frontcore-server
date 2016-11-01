import React from 'react';
import { Link } from 'react-router';

class Settings extends React.Component {
  render() {
    return (
      <div className="list-group">
        <Link className="list-group-item" to="settings/dbconnect">Connection</Link>
        <Link className="list-group-item" to="settings/notifications">Notifications</Link>
        <Link className="list-group-item" to="settings/sshkey">SSH Key</Link>
        <Link className="list-group-item" to="settings/sysinfo">System Information</Link>
        <Link className="list-group-item" to="settings/updates">Updates</Link>
      </div>
    );
  }
};

export default Settings;
