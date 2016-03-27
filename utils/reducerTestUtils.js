import expect from 'expect';

const isReducer = (reducer, initialState) => {
  describe('Act as redux reducer', () => {
    it('return initial state if given state is invalid', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('return exact state if given action is invalid', () => {
      expect(reducer(initialState, {})).toEqual(initialState);
    });
  });
};

export { isReducer };