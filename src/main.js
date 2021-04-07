import {loginForm} from "./components/login.js";
import {initForm} from "./lib/auth.js";


const content = document.getElementById("root");
content.appendChild(loginForm());
initForm();
