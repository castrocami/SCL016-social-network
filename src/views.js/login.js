import { welcome } from '../components/welcome.js';

export const loginForm = () => {
  const loginFormEl = document.createElement('div');
  loginFormEl.appendChild(welcome());
  loginFormEl.id = 'login-form';
  return loginFormEl;
};
