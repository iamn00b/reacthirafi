import expect from 'expect';
import counterReducer from './counter';

describe('Counter Reducers', () => {
  it('Increase the counter number within INCREMENT action', () => {
    const stateBefore = 0;
    const stateAfter = 1;
    const action = {
      type: 'INCREMENT',
    };

    expect(counterReducer(stateBefore, action))
      .toEqual(stateAfter);
  });

  it('Decrease the counter number within DECREMENT action', () => {
    const stateBefore = 3;
    const stateAfter = 2;
    const action = {
      type: 'DECREMENT',
    };

    expect(counterReducer(stateBefore, action))
      .toEqual(stateAfter);
  });
});
