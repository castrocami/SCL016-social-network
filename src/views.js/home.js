import { navBar } from "../components/nav-bar.js";

export const home = () => {
    const home = document.createElement("li");
    home.textContent = "Home Page";
    home.id = "addPost-form";
    home.append(navBar());

    return home;
};