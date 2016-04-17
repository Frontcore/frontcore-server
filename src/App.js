import React from 'react';

import HorizontalNav from './components/Navbar/HorizontalNav.jsx';
import MasterLayout from './components/Layout/MasterLayout.jsx';

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
require('./stylesheets/common.less');
require('./stylesheets/override.less');

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
