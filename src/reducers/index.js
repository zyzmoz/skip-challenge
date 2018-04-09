import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
import authReducer from './auth';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer
});

export default rootReducer;