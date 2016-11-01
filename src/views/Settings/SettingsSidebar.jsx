import React from 'react';
import { Link } from 'react-router';

class Settings extends React.Component {
  render() {
    return (
      <div className="list-group">
        <Link className="list-group-item" to="settings/profile"><i className="fa fa-lg fa-user" aria-hidden="true"></i> User Profile</Link>
        <Link className="list-group-item" to="settings/dbconnect"><i className="fa fa-lg fa-plug" aria-hidden="true"></i> Database Connection</Link>
        <Link className="list-group-item" to="settings/notifications"><i className="fa fa-lg fa-bullhorn" aria-hidden="true"></i> Notifications</Link>
        <Link className="list-group-item" to="settings/sshkey"><i className="fa fa-lg fa-user-secret" aria-hidden="true"></i> SSH Key</Link>
        <Link className="list-group-item" to="settings/sysinfo"><i className="fa fa-lg fa-info-circle" aria-hidden="true"></i> System Information</Link>
        <Link className="list-group-item" to="settings/updates"><i className="fa fa-lg fa-wrench" aria-hidden="true"></i> Updates</Link>
      </div>
    );
  }
};

export default Settings;
