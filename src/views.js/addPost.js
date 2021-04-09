import { navBar } from "../components/nav-bar.js";
export const addPost = () => {
    const addPost = document.createElement("div");
    addPost.textContent = "Posting something";
    addPost.id = "addPost-form";
    addPost.appendChild(navBar());

    return addPost;
};