import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import TestElement from '../TestElement.jsx';

describe('Test Component', () => {
  it('renders without problems', () => {
    const testElementComponent = TestUtils.renderIntoDocument(<TestElement />);
    expect(testElementComponent).toExist();
  });
});
