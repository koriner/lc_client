/*
  @file: src/modules/rootReducer.js
  @brief: Main reducer index to create a root reducer
  @author: Shane Korin (sk@distriqt.com)
*/

import { combineReducers } from 'redux-immutable';
import properties from './properties/reducer';

// Creates the main reducer from any included modules.
const rootReducer = combineReducers({
  properties
});

export default rootReducer;
