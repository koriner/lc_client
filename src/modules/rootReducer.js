/*
  @file: src/modules/rootReducer.js
  @brief: Main reducer index to create a root reducer
  @author: Shane Korin (sk@distriqt.com)
*/

import { combineReducers } from 'redux-immutable';

const emptyReducer = (state = {}) => {
  return state;
}

// Creates the main reducer from any included modules.
// There are no modules yet.
const rootReducer = combineReducers({
  emptyReducer
});

export default rootReducer;
