'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import StyleClassUtils from '../../utils/styleclass.js';

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.styleClass = new StyleClassUtils();

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    let modalBackdrop = document.getElementById('modal-backdrop');
		let modalContent = document.getElementById('modal-content');

		this.styleClass.addClass(ReactDOM.findDOMNode(modalBackdrop), 'modal-backdrop');
		this.styleClass.addClass(ReactDOM.findDOMNode(modalBackdrop), 'fade');
		this.styleClass.addClass(ReactDOM.findDOMNode(modalBackdrop), 'in');

		this.styleClass.addClass(ReactDOM.findDOMNode(modalContent), 'fade');
		this.styleClass.addClass(ReactDOM.findDOMNode(modalContent), 'in');
		ReactDOM.findDOMNode(modalContent).style.display = 'block';
  }

  componentDidMount() {

  };

  componentWillUnmount() {

  };

  render() {
    return (
      <div>
        <div id="modal-backdrop" className=""></div>
        <div className="modal fade" id="modal-content" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><i className="fa fa-times"></i></button>
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
