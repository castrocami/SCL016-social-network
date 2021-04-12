// DOM
import { addPost } from './views.js/addPost.js';
import { home } from './views.js/home.js';
import { loginForm } from './views.js/login.js';
import { profile } from './views.js/profile.js';
import { initForm } from './lib/auth.js';
import { logOutForm } from './views.js/logout.js';
import { setCurrentUser } from './lib/currentUser.js';

const content = document.getElementById('root');
// If the user is trying to enter to route login
if (window.location.pathname === '/login') {
  content.innerHTML = '';
  content.appendChild(loginForm());
  initForm();
// If the user is not trying to enter to route login
} else {
  // We need to know if the user did 
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      setCurrentUser(user);
      // User is signed in.
      // Creating app routes
      switch (window.location.pathname) {
        case '/logOutForm':
          content.appendChild(logOutForm());
          break;
        case '/home':
          content.appendChild(home());
          break;
        case '/profile':
          content.appendChild(profile());
          break;
        case '/addPost':
          content.appendChild(addPost());
          break;
        default:
          content.appendChild(loginForm());
          initForm();
      }
    } else {
      // No user is signed in.
      window.location.replace('/login');
    }
  });
}
