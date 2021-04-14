import { signOutFunction } from '../data/signOut.js';
import { burgerNavBar } from './burger-navBar.js';

export const navBar = () => {
  // Creating nav container and ul element.
  const navBarEl = document.createElement('nav');
  navBarEl.id = 'navBarEl';
  // Creating Logo
  const logoName = document.createElement('div');
  logoName.id = 'logoNavBar';
  const tittleLogo = document.createElement('h1');
  tittleLogo.textContent = 'Lola go';
  logoName.appendChild(tittleLogo);
  navBarEl.appendChild(logoName);
  // Creating Ul
  const navBarUl = document.createElement('ul');
  navBarUl.id = 'navBarUl';
  navBarEl.appendChild(navBarUl);
  // Listener burger
  const navBarBurger = burgerNavBar();
  navBarBurger.addEventListener('click', () => {
    navBarUl.classList.toggle('nav-active');
  });
  navBarEl.appendChild(navBarBurger);
  // Creating 4 <li> elements whith its respectives <a> as links containers

  const liHome = document.createElement('li');
  liHome.id = 'li-home';
  const aHome = document.createElement('a');
  aHome.id = 'a-home';
  aHome.textContent = 'Home';
  aHome.href = '/home';
  liHome.appendChild(aHome);
  navBarUl.appendChild(liHome);

  const liProfile = document.createElement('li');
  liProfile.id = 'li-profile';
  const aProfile = document.createElement('a');
  aProfile.id = 'a-profile';
  aProfile.textContent = 'Profile';
  aProfile.href = '/profile';
  liProfile.appendChild(aProfile);
  navBarUl.appendChild(liProfile);

  const liAddPost = document.createElement('li');
  liAddPost.id = 'li-AddPost';
  const aAddPost = document.createElement('a');
  aAddPost.id = 'a-post';
  aAddPost.textContent = 'Add Post';
  aAddPost.href = '/addPost';
  liAddPost.appendChild(aAddPost);
  navBarUl.appendChild(liAddPost);

  const liSingOut = document.createElement('li');
  liSingOut.id = 'li-singOut';
  /* const aSingOut = document.createElement('a');
  aSingOut.id = 'a-signOut';
  aSingOut.textContent = 'Signout'; */
  liSingOut.appendChild(signOutFunction());
  navBarUl.appendChild(liSingOut);

  return navBarEl;
};
