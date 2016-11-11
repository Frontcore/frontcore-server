import React from 'react';
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

});
