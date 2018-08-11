/*
  @file: src/containers/MapContainer/index.js
  @brief: The main map container
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import styles from './styles.css';
import Map from '../../components/Map';

/**
 * MapContainer component
 */
class MapContainer extends Component {
  render() {
    return (
      <div className={styles.mapContainer}>
        <Map
        />
      </div>
    );
  }
}

export default MapContainer;
