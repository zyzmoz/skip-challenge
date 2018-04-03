import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CART
} from '../actions/types';

const loadCart = (arr) =>
  ({ type: LOAD_CART, payload: arr });

const addToCart = (obj) =>
  ({ type: ADD_TO_CART, payload: obj });

const remove = (id) =>
  ({ type: REMOVE_FROM_CART, payload: id });


export {
  loadCart,
  addToCart,
  remove
}