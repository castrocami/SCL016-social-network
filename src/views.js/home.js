import { allPosts } from '../components/allPosts.js';
import { navBar } from '../components/nav-bar.js';
import { currentUserWelcome } from '../components/userwelcome.js';
import { footer } from '../components/footer.js';
// import { setupPosts } from '../components/all-posts.js';

export const home = () => {
  const homeEl = document.createElement('div');
  homeEl.id = 'addPost-form';
  homeEl.append(navBar());
  homeEl.appendChild(currentUserWelcome());
  homeEl.appendChild(footer())
  homeEl.appendChild(allPosts());
    return homeEl;
};