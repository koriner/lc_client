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
const DEFAULT_CENTER = [144.963, -37.8136];

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapCenter: DEFAULT_CENTER,
      mapZoom: [10],
      selectedItemId: ''
    };
  }

  /**
   * Component update handler
   */
  componentDidUpdate() {
    const { selectedItem } = this.props;

    if (selectedItem) {
      if (this.state.selectedItemId !== selectedItem.get('id')) {
        this.setState({
          selectedItemId: selectedItem.get('id'),
          mapCenter: [selectedItem.get('lon'), selectedItem.get('lat')]
        });
      }
    } else {
      // TODO...
    }
  }

  /**
   * Main render method
   */
  render() {
    const { items } = this.props;
    const { mapCenter, mapZoom } = this.state;

    return (
      <MapBox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          width: '100vw',
          height: '100vh'
        }}
        center={mapCenter}
        zoom={mapZoom}
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
  selectedItem: ImtPropTypes.map,
  onItemSelect: PropTypes.func.isRequired,
};

export default Map;

