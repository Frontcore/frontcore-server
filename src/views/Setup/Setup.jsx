'use strict';

import React from 'react';

import EventEmitter from '../../utils/eventEmitter';
import MyProjects from '../../components/MyProjects/MyProjects.jsx';
import CreateProject from '../../components/CreateProject/CreateProject.jsx';
import ModalBox from '../../components/ModalBox/ModalBox.jsx';
import { Button } from 'react-bootstrap';
import whatsNewImg from '../../assets/imgs/what_is_new.png';

class Setup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Setup'
    }]);
    this.setState({ show: true });
  }

  render() {
    let header = (
      <span title="Frontcore v0.0.0 Alpha">Welcome to Frontcore <sup><small>v0.0.0 Alpha</small></sup></span>
    );
    let footer = (
      <div>
        <label className="checkbox-inline pull-left">
          <input type="checkbox"/> Don't show again (Access from 'Help -> Welcome' menu)
        </label>
        <Button onClick={()=>this.setState({ show: false })} className="btn btn-default">Close</Button>
      </div>
    );

    return (
      <div className="setup-container">
        <div className="row">
          <div className="col-md-6">
            <CreateProject />
          </div>
          <div className="col-md-6">
            <MyProjects />
          </div>
        </div>
        <div className="row">
          <ModalBox header={header} footer={footer} show={this.state.show}>
            <div className="row">
              <div className="col-md-3">
                <img src={whatsNewImg} alt="What's New"/>
              </div>
              <div className="col-md-9">

              </div>
            </div>
          </ModalBox>
        </div>
      </div>
    );
  }
};

export default Setup;
