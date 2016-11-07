import React from 'react';
import ReactDOM from 'react-dom';
import AlertBox from '../../components/AlertBox/AlertBox.jsx';

export default class License extends React.Component {
  constructor(props) {
    super(props);

    this.alertMsg = null;

    this.state = {
      shouldAlert: false,
      alertType: "danger"
    };

    this.validate = this.validate.bind(this);
    this.resetAlertState = this.resetAlertState.bind(this);
  }

  validate() {
    let _hasUserAgreed = ReactDOM.findDOMNode(this).querySelectorAll("input[name=agreement]");

    if (_hasUserAgreed[0].checked) {
      return true;
    }

    this.alertMsg = (
      <div>
        <h4><i className="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i> Application Error</h4>
        <p>You must accept the license terms before you go ahead with user account and database setup.</p>
      </div>
    );

    this.setState({
      shouldAlert: true
    });

    return false;
  }

  resetAlertState() {
    this.setState({
      shouldAlert: false
    });
  }

  render() {
    let { shouldAlert } = this.state;

    return (
      <div className="wizard-license">
        <div className="container license-component">
          {shouldAlert &&
            <AlertBox type={this.state.alertType} showAlert={this.state.shouldAlert}>
              {this.alertMsg}
            </AlertBox>
          }

          <div className="row">
            <div className="col-md-12">
              <h5>Be sure to carefully read and understand all the rights and restrictions described in the license terms. You must accept the license terms before you go ahead with user account and database setup.</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <pre className="license-terms">
                <p>The MIT License (MIT), Copyright (c) 2016 Ashwin Hegde</p>
                <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:</p>
                <p>The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.</p>
                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.</p>
              </pre>
              <div className="radio">
                <label>
                  <input type="radio" name="agreement" onClick={this.resetAlertState} class="agree" value="true"/>
                  I have read and accept the license terms.
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="agreement" onClick={this.resetAlertState} class="disagree" value="false"/>
                  I do not accept the license terms.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
