import { getCurrentUser } from "../data/currentUser.js";
import { allPosts } from "./allPosts.js";

export const postProfile = () => {
    const profilePostDiv = document.createElement('div');
    profilePostDiv.id = 'profilePosts-div';
    const db = firebase.firestore();
    // Create a reference to the collection
    const currentUserPost = db.collection('allPosts');

// Create a query against the collection.
    let userProfile = getCurrentUser().email;
    const myPosts = currentUserPost.where('user', '==', userProfile);
    db.collection('allPosts').where('user','==',userProfile).get().then((querySnapshot) => {
      console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
        const profilePosts = doc.data();
        console.log(profilePosts);

    const postContainer = document.createElement('div');
    postContainer.id ="post-container"

    const profilePostsLi = document.createElement('li');
    profilePostsLi.id = "profile-post-li"
    const profilePostsContainer = `<div>${profilePosts.tittle}</div><div>${profilePosts.content}</div>`;
    profilePostsLi.innerHTML += profilePostsContainer;
       
    postContainer.appendChild(profilePostsLi)  
    profilePostDiv.appendChild(postContainer);
    console.log(doc.id, " => ", doc.data());

    const editionMenu= document.createElement('ul');
    editionMenu.id = 'edition-menu';
  
    const editLi= document.createElement('li');
    editLi.id = 'edit-li';
    editLi.textContent= "edit"
    editionMenu.appendChild(editLi);

    const deleteLi =document.createElement('li');
    deleteLi.id = 'delete-li';
    deleteLi.textContent= "delete"
    editionMenu.appendChild(deleteLi);

    postContainer.appendChild(editionMenu)

    

        
        });
    });      
    return profilePostDiv; 
};


