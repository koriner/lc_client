/*
  @file: src/components/PropertyDetails/index.js
  @brief: Property details sidebar component
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImtPropTypes from 'react-immutable-proptypes';
import styles from './styles.css';

class PropertyDetails extends Component {

  /**
   * Main render method
   */
  render() {
    const { property } = this.props;

    return (
      <div className={property ? styles.wrapperVisible : styles.wrapper}>
        <div className={styles.closeButtonContainer}>
          <button
            className={styles.closeButton}
            onClick={this.props.onClose}
          >
            X
          </button>
        </div>
        {
          property && (
            <div className={styles.details}>
              <h2 className={styles.title}>Property details</h2>
              <h3 className={styles.subtitle}>Address</h3>
              <p>{property.get('full_address')}</p>
              <h3 className={styles.subtitle}>Council</h3>
              <p>{property.get('council')}</p>
              <h3 className={styles.subtitle}></h3>
            </div>
          )
        }
      </div>
    )
  }
}

PropertyDetails.propTypes = {
  property: ImtPropTypes.map,
  onClose: PropTypes.func.isRequired
};

export default PropertyDetails;
