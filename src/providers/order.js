import axios from 'axios';

const url = 'http://api-vanhack-event-sp.azurewebsites.net';
const token = localStorage.getItem('XSRF-TOKEN');
const config = {
  headers: { 'Authorization': "Bearer " + token }
}

export const getOrderById = (orderId) =>
  axios.get(url + '/api/v1/Order/'+ orderId);

export const createOrder = (arr) => {
  let order = {
    id: 0,
    date: new Date().toISOString(),
    customerId: 0,
    deliveryAddress: 'Rsdfsdfsdfsdf',
    contact: 'Rsdfsdfsdfsdf',
    storeId: 2,
    orderItems: [],
    total: 0,
    status: 'Confirmed',
    lastUpdate: new Date().toISOString()
  }
  arr.forEach(prod => {
    order.orderItems.unshift(
      {
        id: 0,
        orderId: 0, 
        productId: prod.id, 
        product: {
          id: prod.id,
          storeId: prod.storeId,
          name: prod.name,
          description: prod.description,
          price: prod.price
        },
        price: prod.price, 
        quantity: 1,
        total: 0
      }
    );
  });

  console.log(order);  

  return axios.post(url + '/api/v1/Order', order, config);
}

export const getOrdersByCustomer = (customer) => {  
  return axios.get(url + '/api/v1/Order/customer', config);
}
