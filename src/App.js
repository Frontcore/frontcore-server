import React from 'react';

import HorizontalNav from './components/Navbar/HorizontalNav.jsx';
import MasterLayout from './components/Layout/MasterLayout.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './stylesheets/common.less';
import './stylesheets/override.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <HorizontalNav />
        <MasterLayout />
      </div>
    );
  }
}

export default App;
