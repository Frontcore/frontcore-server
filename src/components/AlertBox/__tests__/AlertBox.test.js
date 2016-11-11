import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import AlertBox from '../AlertBox.jsx';

describe('<AlertBox /> component', function() {

  it('should output a alert with message', function() {
    let _instance = ReactTestUtils.renderIntoDocument(
      <AlertBox>
        Hello World
      </AlertBox>
    );
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(_instance, 'Alert')).toBeTruthy();
  });

	it('should output a danger alert type', function() {
		let _instance = ReactTestUtils.renderIntoDocument(
			<AlertBox type="danger" showAlert={true}>
				Hello World
			</AlertBox>
		);
		expect(ReactDOM.findDOMNode(_instance).className.match(/\alert-danger\b/)[0]).toEqual('alert-danger');
	});

	it('should output a success alert type', function() {
		let _instance = ReactTestUtils.renderIntoDocument(
			<AlertBox type="success" showAlert={true}>
				Hello World
			</AlertBox>
		);
		expect(ReactDOM.findDOMNode(_instance).className.match(/\alert-success\b/)[0]).toEqual('alert-success');
	});

});
