import React, { PropTypes } from 'react';

import HorizontalNav from './components/Navbar/HorizontalNav.jsx';
import AlertBox from './components/AlertBox/AlertBox.jsx';
import Footer from './components/Footer/Footer.jsx';
import Notification from './components/Notification/Notification.jsx';

import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './stylesheets/common.less';
import './stylesheets/override.less';

class App extends React.Component {
  render() {
    return (
      <div>
				<Notification />
        <HorizontalNav />
        <div className="container">
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
