import React from 'react';
import ReactDOM from 'react-dom';

import Store from './redux';

import Counter from './components/Counter';

const incrementAction = () => Store.dispatch({ type: 'INCREMENT' });
const decrementAction = () => Store.dispatch({ type: 'DECREMENT' });

const App = () => (
  <Counter
    onIncrement={ incrementAction }
    onDecrement={ decrementAction }
    counter={ Store.getState().counter }
  />
);

const render = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

Store.subscribe(render);
render();
