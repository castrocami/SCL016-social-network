import { navBar } from "../components/nav-bar.js";
export const logOutForm = () => {
    const logOutForm = document.createElement("li");
    logOutForm.id = "logOut-form";
    logOutForm.textContent = "log out";
    logOutForm.appendChild(navBar());

    return logOutForm;
};