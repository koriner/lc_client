/*
  @file: src/components/Map/IconLayer.js
  @brief: Mapbox icon layer component
  @author: Shane Korin (sk@distriqt.com)
*/

import React from 'react';
import { Marker } from 'react-mapbox-gl';
import styles from './styles.css';

// Map marker component
const MapMarker = ({ lon, lat, onClick }) => {
  return (
    <Marker
      coordinates={[lon, lat]}
      onClick={onClick}
    >
      <div className={styles.mapMarker}></div>
    </Marker>
  )
}

const IconLayer = ({ items, handleMarkerClick }) => {
  return (
    <div>
      {
        items.map((item, index) => (
          <MapMarker
            key={item.get('id')}
            lon={item.get('lon')}
            lat={item.get('lat')}
            onClick={(e) => handleMarkerClick(item.get('id'))}
          />
        ))
      }
    </div>
  )
}

export default IconLayer;
