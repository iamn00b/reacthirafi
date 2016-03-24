import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import HelloWorld from './HelloWorld.jsx';

describe('Hello World Component', () => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<HelloWorld />);
  const renderResult = shallowRenderer.getRenderOutput();

  it('renders without problems', () => {
    expect(renderResult).toExist();
  });

  it('renders "Hello World" heading text', () => {
    expect(renderResult.type).toBe('h1');
    expect(renderResult.props.children).toBe('Hello World');
  });
});
