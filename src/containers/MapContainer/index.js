/*
  @file: src/containers/MapContainer/index.js
  @brief: The main map container
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Map from '../../components/Map';
import { loadProperties, selectProperty } from '../../modules/properties/actions';

/**
 * MapContainer component
 */
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onItemSelect = this.onItemSelect.bind(this);
  }

  /**
   * Component mount handler
   */
  componentDidMount() {
    // On startup, request the list of properties from the API.
    this.props.loadProperties();
  }

  /**
   * Handler for when a property marker is selected on the map
   *
   * @param {String} itemId - selected property item ID
   */
  onItemSelect(itemId) {
    this.props.selectProperty(itemId);
  }

  /**
   * Main render method
   */
  render() {
    const { properties } = this.props;
    const isLoading = properties.get('isLoading');
    const propertyList = properties.get('filteredProperties');

    return (
      <div className={styles.mapContainer}>
        <Map
          isLoading={isLoading}
          items={propertyList}
          onItemSelect={this.onItemSelect}
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
    loadProperties: () => dispatch(loadProperties()),
    selectProperty: (id) => dispatch(selectProperty(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
