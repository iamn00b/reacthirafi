import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import HelloWorld from './HelloWorld.jsx';

describe('Test Component', () => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<HelloWorld />);
  const renderResult = shallowRenderer.getRenderOutput();

  it('renders without problems', () => {
    expect(renderResult).toExist();
    expect(renderResult.type).toBe('h1');
  });
});
