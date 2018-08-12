/*
  @file: src/components/Filters/index.js
  @brief: Filtering options component
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImtPropTypes from 'react-immutable-proptypes';
import styles from './styles.css';

class Filters extends Component {

  /**
   * Main render method
   */
  render() {
    const { onChange } = this.props;

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Filter by council</h2>
      </div>
    )
  }
}

Filters.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Filters;
