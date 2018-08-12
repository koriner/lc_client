/*
  @file: src/modules/properties/actions.js
  @brief: Property module actions
  @author: Shane Korin (sk@distriqt.com)
*/

import propertiesService from '../../services/propertiesService';

// Action types

export const PROPERTIES_LOAD              = 'properties/load';
export const PROPERTIES_LOAD_START        = 'properties/load_start';
export const PROPERTIES_LOAD_SUCCESS      = 'properties/load_success';
export const PROPERTIES_LOAD_FAILED       = 'properties/load_failed';
export const PROPERTIES_SELECT_PROPERTY   = 'properties/select_property';
export const PROPERTIES_APPLY_FILTERS     = 'properties/apply_filters';

// Action creators

export const loadProperties = () => {
  return async dispatch => {
    dispatch(loadPropertiesStart());

    try {
      const res = await propertiesService.loadProperties();
      // simple delay to simulate loading
      setTimeout(() => {
        dispatch(propertiesLoaded(res));
      }, 2000);
    } catch(err) {
      dispatch(propertiesLoadFailed(err));
    }
  };
}

export const loadPropertiesStart = () => {
  return {
    type: PROPERTIES_LOAD_START
  };
}

export const propertiesLoaded = (propertiesJson) => {
  return {
    type: PROPERTIES_LOAD_SUCCESS,
    payload: {
      results: propertiesJson
    }
  };
}

export const propertiesLoadFailed = (error) => {
  return {
    type: PROPERTIES_LOAD_FAILED,
    payload: {
      error
    }
  };
}

export const selectProperty = (propertyId) => {
  return {
    type: PROPERTIES_SELECT_PROPERTY,
    payload: {
      propertyId
    }
  };
}

export const applyFilters = (filters) => {
  return {
    type: PROPERTIES_APPLY_FILTERS,
    payload: {
      filters
    }
  };
}
