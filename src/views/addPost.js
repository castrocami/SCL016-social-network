import { formNewPost } from '../components/form-newPost.js';
import { navBar } from '../components/nav-bar.js';
import { footer } from '../components/footer.js';

export const addPost = () => {
  const addPostEl = document.createElement('div');
  addPostEl.id = 'addPost-form';
  addPostEl.appendChild(navBar());
  const formContainer = document.createElement('main');
  formContainer.id = 'form-container';
  formContainer.appendChild(formNewPost());
  addPostEl.appendChild(formContainer);
  addPostEl.appendChild(footer());
  return addPostEl;
};
