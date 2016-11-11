import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalBox extends React.Component {
  render() {
    return (
      <Modal {...this.props} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>{this.props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          {this.props.footer}
        </Modal.Footer>
      </Modal>
    );
  }
};
