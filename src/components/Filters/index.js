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
  constructor(props) {
    super(props);

    this.state = {
      selected: {}
    };

    this.selectOption = this.selectOption.bind(this);
  }

  /**
   * Change event for option checkbox
   *
   * @param {String} opt - Option name
   * @param {Event} event - Event
   */
  selectOption(opt, event) {
    const { selected } = this.state;
    selected[opt] = event.target.checked;

    this.setState({ selected });
    this.props.onChange(selected);
  }

  /**
   * Main render method
   */
  render() {
    const { onChange, options } = this.props;

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Filter by council</h2>
        <ul className={styles.options}>
          {
            options.map(opt =>
              <li key={opt} className={styles.option}>
                <input id={`check_${opt}`} type="checkbox" onChange={(e) => this.selectOption(opt, e)} />
                <label htmlFor={`check_${opt}`}>{opt}</label>
              </li>  
            )
          }
        </ul>
      </div>
    )
  }
}

Filters.propTypes = {
  options: ImtPropTypes.list.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filters;
