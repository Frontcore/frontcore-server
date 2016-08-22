'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Feeback extends React.Component {
  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Feedback'
    }]);
  }

  render() {
    return (
      <div className="jumbotron feedback-component">
        <p className="lead">
            Thank you for sharing your experiences.
            This feedback is important to us and helps us to understand the needs of the developers.
        </p>
        <hr/>
        <p className="lead">
          To request a feature or you find any typo errors, enhancements or questions; please feel free to post it on tracker link provided, or vote for the ones that are already registered. Visit: <a href="//github.com/Frontcore/frontcore/issues" target="_blank">github.com/Frontcore/frontcore/issues</a>
        </p>
        <p className="lead">
          To see the upcoming release or milestones visit our milestones link. Visit: <a href="//github.com/Frontcore/frontcore/issues/milestones" target="_blank">github.com/Frontcore/frontcore/issues/milestones</a>
        </p>
      </div>
    );
  }
};

export default Feeback;
