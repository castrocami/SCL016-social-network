import { allPosts } from '../components/allPosts.js';
import { navBar } from '../components/nav-bar.js';
import { currentUserWelcome } from '../components/userwelcome.js';

export const home = () => {
  const homeEl = document.createElement('box');
  // home.textContent = "Home Page";
  homeEl.id = 'addPost-form';
  homeEl.append(navBar());
  homeEl.appendChild(currentUserWelcome());
  homeEl.appendChild(allPosts());

  return homeEl;
};
