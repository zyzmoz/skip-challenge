import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CART  
} from '../actions/types';

const removeById = (state, id) => {
  const arr = state.filter(item => item.id !== id); 
  return arr;
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CART:    
      return action.payload;
    case ADD_TO_CART:   
      state = [...state, action.payload];   
      return state;

    case REMOVE_FROM_CART:   
      const cart = removeById(state, action.payload);      
      console.log(cart);      
      return cart;
  
    default:
      return state;
  }
}

export default cartReducer;