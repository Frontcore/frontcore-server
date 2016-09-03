'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from '../../utils/eventEmitter';

class License extends React.Component {
  constructor(props) {
    super(props);

    this.hasUserAgreed = this.hasUserAgreed.bind(this);
  }

  hasUserAgreed(e) {
    EventEmitter.emit('has-user-agreed', e.currentTarget.value);    
  }

  render() {
    return (
      <div className="wizard-license">
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
            <input type="radio" name="iagree" onChange={this.hasUserAgreed} value="true"/>
            I have read and accept the license terms.
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="iagree" onChange={this.hasUserAgreed} value="false"/>
            I do not accept the license terms.
          </label>
        </div>
      </div>
    );
  }
};

export default License;
