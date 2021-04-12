import { navBar } from '../components/nav-bar.js';
import { currentUserWelcome } from '../components/userwelcome.js';

export const home = () => {
  const homeEl = document.createElement('box');
  // home.textContent = "Home Page";
  homeEl.id = 'addPost-form';
  homeEl.append(navBar());
  homeEl.appendChild(currentUserWelcome());

  return homeEl;
};
