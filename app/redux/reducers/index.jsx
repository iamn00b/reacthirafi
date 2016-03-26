import { combineReducers } from 'redux';

import counter from './counter';

const AppReducers = combineReducers({
  counter,
});

export default AppReducers;
