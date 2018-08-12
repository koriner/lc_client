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
  PROPERTIES_SELECT_PROPERTY,
  PROPERTIES_APPLY_FILTERS,
} from './actions';

// Defines initial state for the properties store, converted to ImmutableJS object
const INITIAL_STATE = fromJS({
  isLoading: false,
  isLoaded: false,
  loadError: false,
  all: [],
  filters: [],
  selectedFilters: [],
  filteredPropeties: [],
  selectedProperty: null
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

      // find all possible councils from the results
      const councils = [];
      payload.results.forEach(p => {
        if (!councils.includes(p.council)) {
          councils.push(p.council);
        }
      })

      return state
        .merge({
          isLoading: false,
          isLoaded: true,
          loadError: false,
        })
        .set('filters', fromJS(councils))
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

    case PROPERTIES_SELECT_PROPERTY: {
      if (!payload.propertyId) {
        return state.set('selectedProperty', null);
      }

      const property = state.get('all').find(p => p.get('id') === payload.propertyId);
      return state.set('selectedProperty', property);
    }

    case PROPERTIES_APPLY_FILTERS: {
      const filters = [];

      Object.keys(payload.filters).forEach(k => {
        if (payload.filters[k]) {
          filters.push(k);
        }
      });
      
      if (filters.length) {
        const filtered = state.get('all').filter(property => {
          return filters.includes(property.get('council'));
        })

        return state
          .set('selectedFilters', fromJS(filters))
          .set('filteredProperties', filtered);
      } else {
        return state
          .set('selectedFilters', null)
          .set('filteredProperties', state.get('all'));
      }
    }

    default: {
      return state;
    }
  }
}
