import { navBar } from '../components/nav-bar.js';
import { userData } from '../components/user-data.js';

export const profile = () => {
  const profileEl = document.createElement('div');
  profileEl.textContent = 'Profile Page';
  profileEl.id = 'profile';
  profileEl.appendChild(navBar());
  profileEl.appendChild(userData());
  return profileEl;
};
