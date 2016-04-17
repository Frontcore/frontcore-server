'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/**
 * AlertBox class will return Bootstrap alert DOM structure.
 */
class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.closeAlertBox = this.closeAlertBox.bind(this);
  };

  closeAlertBox() {
    let alertBox = document.getElementById('alert-box')
    ReactDOM.findDOMNode(alertBox).style.display = 'none';
  };

  render() {
    let alertClassNames = {
      'alert': true,
      'alert-dismissible': true,
      'fade': true,
      'in': true
    };

    /**
     * Set alert property type and provide these classnames to `classNames` method.
     */
    alertClassNames['alert-' + this.props.type] = true;
    alertClassNames = classNames(alertClassNames);

    let closeButton = '';
    if(this.props.canClose === 'true') {
      closeButton = <button type="button" className="close" onClick={this.closeAlertBox}><i className="fa fa-times"></i></button>;
    }

    let hasMsgTitle = '';
    if(this.props.msgTitle) {
      hasMsgTitle = <h4 dangerouslySetInnerHTML={{__html: this.props.msgTitle}} />;
    }

    let hasMsg = '';
    if(this.props.msg) {
      hasMsg = <p dangerouslySetInnerHTML={{__html: this.props.msg}} />;
    }

    return (
      <div className={alertClassNames} id="alert-box">
        {closeButton}
        {hasMsgTitle}
        {hasMsg}
      </div>
    );
  }

};

export default AlertBox;
