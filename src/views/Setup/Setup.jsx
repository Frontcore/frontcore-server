import React from 'react';
import EventEmitter from '../../utils/eventEmitter';
import MyProjects from '../../components/MyProjects/MyProjects.jsx';
import CreateProject from '../../components/CreateProject/CreateProject.jsx';
import WelcomeModal from './Welcome.jsx';

class Setup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    EventEmitter.emit('update-breadcrumb-path', [{
      isActive: true,
      text: 'Setup'
    }]);
  }

  render() {
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
        <WelcomeModal/>
      </div>
    );
  }
};

export default Setup;
