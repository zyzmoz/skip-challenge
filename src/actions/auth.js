import {
  LOGIN,
  SIGN_IN,
  SIGN_OUT
} from './types';


const login = (token) => {
  localStorage.setItem('XSRF-TOKEN', token);
  return { type: LOGIN, payload: true };
}

const signOut = () => {
  localStorage.removeItem('XSRF-TOKEN');
  return { type: SIGN_OUT, payload: false };
}

export {
  login,
  signOut
}