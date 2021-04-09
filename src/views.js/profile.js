import { navBar } from "../components/nav-bar.js";

export const profile = () => {
    const profile = document.createElement("li");
    profile.textContent = "Profile Page";
    profile.id = "profile";
    profile.appendChild(navBar());

    return profile;
};