import { getCurrentUser } from '../data/currentUser.js';
// import { profile } from '../views.js/profile.js';

export const userData = () => {
  const profileEl = document.createElement('div');
  profileEl.id = 'profile';
  const nameUser = document.createElement('p');
  const emailUser = document.createElement('p');
  nameUser.textContent = getCurrentUser().displayName;
  emailUser.textContent = getCurrentUser().email;
  profileEl.appendChild(nameUser);
  profileEl.appendChild(emailUser);
  return profileEl;
};
