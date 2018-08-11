/*
  @file: src/components/Map/index.js
  @brief: Map component for Mapbox integration
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImtPropTypes from 'react-immutable-proptypes';
import ReactMapboxGL, { Layer, Feature, Popup } from 'react-mapbox-gl';
import IconLayer from './IconLayer';
import { MAPBOX_ACCESS_TOKEN } from '../../constants/config';

// Create an instance of the mapbox component
const MapBox = ReactMapboxGL({
  accessToken: MAPBOX_ACCESS_TOKEN
});

// Default center position (melbourne)
const CENTER = [144.963, -37.8136];

class Map extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Main render method
   */
  render() {
    const { items } = this.props;

    return (
      <MapBox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          width: '100vw',
          height: '100vh'
        }}
        center={CENTER}
      >
        <IconLayer
          items={items}
          handleMarkerClick={this.props.onItemSelect}
        />
      </MapBox>
    )
  }
}

Map.propTypes = {
  isLoading: PropTypes.bool,
  items: ImtPropTypes.list,
  onItemSelect: PropTypes.func.isRequired,
};

export default Map;

