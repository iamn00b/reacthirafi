import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import TestElement from '../TestElement.jsx';

describe('Test Component', () => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<TestElement />);
  const renderResult = shallowRenderer.getRenderOutput();

  it('renders without problems', () => {
    expect(renderResult).toExist();
    expect(renderResult.type).toBe('h1');
  });
});
