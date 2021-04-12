import { getCurrentUser } from '../lib/currentUser.js';

export const userData = () =>{
  const profileEl = document.createElement('div');
  const nameUser = document.createElement('p');
  const emailUser = document.createElement('p');
  nameUser.textContent = getCurrentUser().displayName;
  emailUser.textContent = getCurrentUser().email;
  profileEl.appendChild(nameUser);
  profileEl.appendChild(emailUser);
  return profileEl;
};
