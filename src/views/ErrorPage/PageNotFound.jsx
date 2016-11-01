import React from 'react';
import { Link } from 'react-router';
import pageNotFoundImg  from '../../assets/imgs/page-not-found.png';
import './PageNotFound.less';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="col-md-12 characters">
            <img src={pageNotFoundImg} alt="Page Not Found!" />
          </div>
          <div className="col-md-12">
            <h1>Page not found</h1>
            <p>Sorry, an error has occured, the page you are trying to visit is not available.</p>
            <p>It could be a broken or dead link!</p>
            <p>
              <Link to="/" className="btn btn-primary"><i className="fa fa-lg fa-home"></i> Go back to Home Page</Link>
            </p>
            <hr/>
            <a href="//github.com/Frontcore/frontcore" target="_blank" className="btn btn-link btn-sm">Github Home Page</a>
            <a href="//github.com/Frontcore/frontcore/releases" target="_blank" className="btn btn-link btn-sm">Release Page</a>
            <a href="//github.com/Frontcore/frontcore/milestones" target="_blank" className="btn btn-link btn-sm">Milestones</a>
            <a href="//github.com/Frontcore/frontcore/issues" target="_blank" className="btn btn-link btn-sm">Report Issues</a>
            <a href="//github.com/Frontcore/frontcore/pulls" target="_blank" className="btn btn-link btn-sm">Open Pull Requests</a>
            <a href="//github.com/Frontcore/frontcore" target="_blank" className="btn btn-link btn-sm">About Frontcore</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
