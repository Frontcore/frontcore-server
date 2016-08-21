import React, { PropTypes } from 'react';

import HorizontalNav from './components/Navbar/HorizontalNav.jsx';
import AlertBox from './components/Alert/AlertBox.jsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.jsx';
import Footer from './components/Footer/Footer.jsx';

import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './stylesheets/common.less';
import './stylesheets/override.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <HorizontalNav />
        <div className="container">
          <AlertBox type="danger">
            <h4>Oh snap! You got an error!</h4>
            <p>Change this and that and try again. Duis mollis, est non commodo luctus</p>
          </AlertBox>
          <Breadcrumb/>
          <section className="sub-container">
            <div className="row">
              <div className="col-md-12">
                {this.props.children}
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
