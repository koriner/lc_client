/*
  @file: src/containers/UIContainer/index.js
  @brief: UI overlay container
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import PropertDetails from '../../components/PropertyDetails';
import Filters from '../../components/Filters';
import { selectProperty, applyFilters } from '../../modules/properties/actions';

class UIContainer extends Component {

  /**
   * Main render method
   */
  render() {
    const { selectedProperty, filters } = this.props;

    return (
      <div className={styles.wrapper}>
        <Filters
          options={filters}
          onChange={this.props.applyFilters}
        />
        <PropertDetails
          property={selectedProperty}
          onClose={this.props.closeDetails}
        />
      </div>
    );
  }
}

// Map redux state that we need for this container
function mapStateToProps(state) {
  return {
    selectedProperty: state.getIn(['properties', 'selectedProperty']),
    filters: state.getIn(['properties', 'filters'])
  };
}

// Map redux actions to prop methods
function mapDispatchToProps(dispatch) {
  return {
    closeDetails: () => dispatch(selectProperty(null)),
    applyFilters: (filters) => dispatch(applyFilters(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIContainer);
