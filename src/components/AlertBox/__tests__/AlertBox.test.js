import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import AlertBox from '../AlertBox.jsx';

describe('<AlertBox /> component', function() {

	it('should alert exist', function() {
		let _instance = ReactTestUtils.renderIntoDocument(<AlertBox />);
		expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
	});

  it('should output a alert with message', function() {
    let _instance = ReactTestUtils.renderIntoDocument(
      <AlertBox>
        Hello World
      </AlertBox>
    );
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(_instance, 'Alert')).toBeTruthy();
  });

	it('should output a danger alert type', function() {
		let _showAlert = true;
		let _instance = ReactTestUtils.renderIntoDocument(
			<AlertBox type="danger" showAlert={_showAlert}>
				Hello World
			</AlertBox>
		);
		expect(ReactDOM.findDOMNode(_instance).className.match(/\alert-danger\b/)[0]).toEqual('alert-danger');
	});

	it('should output a success alert type', function() {
		let _showAlert = true;
		let _instance = ReactTestUtils.renderIntoDocument(
			<AlertBox type="success" showAlert={_showAlert}>
				Hello World
			</AlertBox>
		);
		expect(ReactDOM.findDOMNode(_instance).className.match(/\alert-success\b/)[0]).toEqual('alert-success');
	});

});
