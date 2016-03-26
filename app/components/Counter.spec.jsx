import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import Counter from './Counter.jsx';

describe('Counter Component', () => {

  it('renders without problems', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Counter />);
    const renderResult = shallowRenderer.getRenderOutput();

    expect(renderResult).toExist();
  });

  it('renders counter number correctly', () => {
    const props = { 
      counter: 1
    };

    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Counter {...props} />);
    const renderResult = shallowRenderer.getRenderOutput();
    
    expect(renderResult).toExist();
    expect(renderResult.props.children[0].props.children).toBe(props.counter);
  });
});
