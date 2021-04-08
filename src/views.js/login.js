import { welcome } from "../components/welcome.js";

export const loginForm = () => {
    const loginForm = document.createElement("div");
    loginForm.appendChild (welcome());
    loginForm.id = "login-form";
    return loginForm;
};