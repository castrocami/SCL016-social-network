//DOM
import { addPost } from "./views.js/addPost.js";
import { home } from "./views.js/home.js";
import { loginForm } from "./views.js/login.js";
import { profile } from "./views.js/profile.js";
import { initForm } from "./components/auth.js";
import { logOutForm } from "./views.js/logout.js";

const content = document.getElementById("root");

//Creating app routes

switch (window.location.pathname) {
  case "/login":
    content.appendChild(loginForm());
    initForm();
    break;

  case "/logOutForm":
    content.appendChild(logOutForm());
        break;

    case "/home":
        content.appendChild(home());
        break;

    case "/profile":
        content.appendChild(profile());
        break;

    case "/addPost":
        content.appendChild(addPost());
        break;

  default:
    content.appendChild(loginForm());
    initForm();
}