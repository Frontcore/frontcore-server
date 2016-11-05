import React from 'react';
import { Button } from 'react-bootstrap';
import HorizontalNav from '../../components/Navbar/HorizontalNav.jsx';
import Wizard from '../../components/Wizard/Wizard.jsx';
import EventEmitter from '../../utils/eventEmitter';
import './Install.less';

import License from './License.jsx';
import Database from './Database.jsx';

export default class Install extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let steps = [{
      step: <License />
    }, {
      step: <Database />
    }];

    return (
      <div>
        <HorizontalNav />
        <Wizard initialStep={1} steps={steps} />
      </div>
    );
  }
};
