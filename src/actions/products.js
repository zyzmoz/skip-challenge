import {
  LOAD_PRODUCTS

} from './types';

const loadProducts = (productList) =>
  ({ type: LOAD_PRODUCTS, payload: productList });

export {
  loadProducts
}