import axios from 'axios';

const url = 'http://api-vanhack-event-sp.azurewebsites.net';

export const createAccount = (obj) => {   
  return axios.post(url + '/api/v1/Customer', {name: obj.name, address: obj.address, email: obj.email, password: obj.password, creation: new Date()});
}

export const login = (email, password) =>
  axios.post(url + '/api/v1/Customer/auth?email='+ email +'&password='+ password);