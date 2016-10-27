import React from 'react';
import ReactDOM from 'react-dom';
import AlertBox from '../AlertBox/AlertBox.jsx';
import './Notification.less';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldAlert: true,
      alertType: "info"
    };
  }

  render() {
    return (
      <div className="notification-component">
        <AlertBox type={this.state.alertType} showAlert={this.state.shouldAlert}>
          <div className="container notify-text">
            You logged in with another tab or window of __browser_name__. <a href="#">Reload</a> to refresh your session.
          </div>
        </AlertBox>
      </div>
    );
  }
};
