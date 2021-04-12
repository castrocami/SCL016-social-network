import { navBar } from '../components/nav-bar.js';

export const addPost = () => {
  const addPostEl = document.createElement('div');
  addPostEl.textContent = 'Posting something';
  addPostEl.id = 'addPost-form';
  addPostEl.appendChild(navBar());

  return addPostEl;
};
