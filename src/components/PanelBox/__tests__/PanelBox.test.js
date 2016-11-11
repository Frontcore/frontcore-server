import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import PanelBox from '../PanelBox.jsx';

describe('<PanelBox /> component', function() {

	it('should panelbox exist', function() {
		let _instance = ReactTestUtils.renderIntoDocument(<PanelBox />);
		expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
	});

});
