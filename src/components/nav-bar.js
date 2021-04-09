// import "/localstyle.scss";

export const navBar = () => {
    //creating nav container and ul element.
    const navBarDiv = document.createElement("div");
    navBarDiv.id = "navBarDiv";
    const navBarUl = document.createElement("ul");
    navBarUl.id = "navBarUl";
    navBarDiv.appendChild(navBarUl);

    //creating 4 <li> elements whith its respectives <a> as links containers

    const liHome = document.createElement("li");
    liHome.id = "li-home";
    const aHome = document.createElement("a");
    aHome.id = "a-home";
    liHome.appendChild(aHome);
    navBarUl.appendChild(liHome);
    liHome.innerText = "Home";

    // aHome.addEventListener("click", (e)=>
    // e.preventDefault
    // )

    const liProfile = document.createElement("li");
    liProfile.id = "li-profile";
    const aProfile = document.createElement("a");
    aProfile.id = "a-profile";
    liProfile.appendChild(aProfile);
    navBarUl.appendChild(liProfile);
    liProfile.innerText = "Profile";

    const liAddPost = document.createElement("li");
    liAddPost.id = "li-AddPost";
    const aAddPost = document.createElement("a");
    aAddPost.id = "a-post";
    liAddPost.appendChild(aAddPost);
    navBarUl.appendChild(liAddPost);
    liAddPost.innerText = "Add Post";

    const liSingOut = document.createElement("li");
    liSingOut.id = "li-singOut";
    const aSingOut = document.createElement("a");
    aSingOut.id = "a-signOut";
    liSingOut.appendChild(aSingOut);
    navBarUl.appendChild(liSingOut);
    liSingOut.innerText = "Signout";

    return navBarDiv;
};