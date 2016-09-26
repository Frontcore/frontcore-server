import React from 'react';
import ModalBox from '../../components/ModalBox/ModalBox.jsx';
import { Button } from 'react-bootstrap';
import whatsNewImg from '../../assets/imgs/what_is_new.png';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
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
        <Button type="button" bsStyle="primary">Start Project Tour</Button>
        <Button onClick={()=>this.setState({ show: false })} className="btn btn-default">Close</Button>
      </div>
    );

    return (
      <ModalBox header={header} footer={footer} show={this.state.show}>
        <div className="row">
          <div className="col-md-3">
            <img src={whatsNewImg} alt="What's New"/>
          </div>
          <div className="col-md-9">
            
          </div>
        </div>
      </ModalBox>
    );
  }
};

export default Welcome;
