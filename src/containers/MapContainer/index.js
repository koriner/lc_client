/*
  @file: src/containers/MapContainer/index.js
  @brief: The main map container
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Map from '../../components/Map';
import { loadProperties } from '../../modules/properties/actions';

/**
 * MapContainer component
 */
class MapContainer extends Component {
  /**
   * Component mount handler
   */
  componentDidMount() {
    // On startup, request the list of properties from the API.
    this.props.loadProperties();
  }

  render() {
    const { properties } = this.props;
    const isLoading = properties.get('isLoading');
    const propertyList = properties.get('filteredProperties');

    return (
      <div className={styles.mapContainer}>
        <Map
          isLoading={isLoading}
          items={propertyList}
        />
      </div>
    );
  }
}

// Map redux state that we need for this container
function mapStateToProps(state) {
  return {
    properties: state.get('properties')
  };
}

// Map redux actions to prop methods
function mapDispatchToProps(dispatch) {
  return {
    loadProperties: () => dispatch(loadProperties())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
