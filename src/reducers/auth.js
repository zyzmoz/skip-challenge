import {
  SIGN_IN,
  LOGIN,
  SIGN_OUT
} from '../actions/types';

const isLogged = localStorage.getItem('XSRF-TOKEN')? true: false;

const authReducer = (state = isLogged, action) => {
  switch (action.type) {
    case LOGIN:      
      return action.payload;
    
    case SIGN_OUT:  
      return action.payload     
  
    default:
      return state;
  }

}

export default authReducer;