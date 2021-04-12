import { navBar } from "../components/nav-bar.js";
import {currentUserWelcome} from "../components/userwelcome.js";

export const home = () => {
    const home = document.createElement("box");
    //home.textContent = "Home Page";
    home.id = "addPost-form";
    home.append(navBar());
    home.appendChild(currentUserWelcome());

    return home;
};