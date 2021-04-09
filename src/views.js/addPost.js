import { navBar } from "../components/nav-bar.js";
export const addPost = () => {
    const addPost = document.createElement("li");
    addPost.appendChild(navBar());
    addPost.textContent = "Posting something";
    addPost.id = "addPost-form";

    return addPost;
};