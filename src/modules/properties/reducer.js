/*
  @file: src/modules/properties/reducer.js
  @brief: Properties module reducer
  @author: Shane Korin (sk@distriqt.com)
*/

import { fromJS } from 'immutable';
import {
  PROPERTIES_LOAD_START,
  PROPERTIES_LOAD_SUCCESS,
  PROPERTIES_LOAD_FAILED,
} from './actions';

// Defines initial state for the properties store, converted to ImmutableJS object
const INITIAL_STATE = fromJS({
  isLoading: false,
  isLoaded: false,
  loadError: false,
  all: [],
  filters: [],
  filteredPropeties: []
});

// Properties reducer
export default function propertiesReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case PROPERTIES_LOAD_START: {
      return state.merge({
        isLoading: true,
        isLoaded: false,
        loadError: false
      });
    }

    case PROPERTIES_LOAD_SUCCESS: {
      // set the list of properties converted to an immutable List
      const properties = fromJS(payload.results);
      
      return state
        .merge({
          isLoading: false,
          isLoaded: true,
          loadError: false,
        })
        .set('all', properties)
        // no filters are selected at startup so just set the filtered properties
        // list to the whole collection of properties
        .set('filteredProperties', properties)
    }

    case PROPERTIES_LOAD_FAILED: {
      return state.merge({
        isLoading: false,
        isLoaded: false,
        loadError: payload.error
      });
    }

    default: {
      return state;
    }
  }
}
