import axios from 'axios';

const url = 'http://api-vanhack-event-sp.azurewebsites.net';

export const getProdutcs = () =>
  axios.get(url + '/api/v1/Product');

export const searchProducts = (str) =>
  axios.get(url + '/api/v1/Product/search/' + str );

export const getProductById = (id) =>
  axios.get(url + '/api/v1/Product/' + id);
