import axios from 'axios';

const url = 'http://api-vanhack-event-sp.azurewebsites.net';

export const createAccount = (obj) => 
  axios.post(url + '/api/v1/Customer', {data: JSON.stringify(obj)});