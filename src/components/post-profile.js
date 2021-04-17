import { getCurrentUser } from "../data/currentUser.js";
import { allPosts } from "./allPosts.js";

export const postProfile = () => {
    const profilePostDiv = document.createElement('div');
    profilePostDiv.id = 'profilePosts-div';
    const db = firebase.firestore();
    // Create a reference to the cities collection
    const currentUserPost = db.collection('allPosts');

// Create a query against the collection.
    let userProfile = getCurrentUser().email;
    const myPosts = currentUserPost.where('user', '==', userProfile);
    db.collection('allPosts').where('user','==',userProfile).get().then((querySnapshot) => {
      console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
        const profilePosts = doc.data();
        console.log(profilePosts);
        const profilePostsLi = document.createElement('li');
        const profilePostsContainer = `<div>${profilePosts.tittle}</div><div>${profilePosts.content}</div>`;
        profilePostsLi.innerHTML += profilePostsContainer;
        profilePostDiv.appendChild(profilePostsLi);
        console.log(doc.id, " => ", doc.data());

        
        });
    });      
    return profilePostDiv; 
};
