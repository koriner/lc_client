/*
  @file: src/services/productsService.js
  @brief: Products service
  @author: Shane Korin (sk@distriqt.com)
*/

import axios from 'axios';
import Promise from 'promise';

const API_URL = 'http://localhost:3001';

/**
 * Loads the properties JSON from a specified URL. The base API_URL
 * is just hard-coded above for this example.
 */
const loadProperties = async () => {
  return await axios
    .get(`${API_URL}/properties`)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err));
}

export default {
  loadProperties
};
