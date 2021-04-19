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

//EDITING CONTENT
 ///editing a post https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419
    const editionMenu= document.createElement('ul');
    editionMenu.id = 'edition-menu';
  
    const editLi= document.createElement('li');
    editLi.id = 'edit-li';
    editLi.textContent= "edit"
    editionMenu.appendChild(editLi);
    const editingMyPosts =()=> {
      const editMyPost = db.collection("allPosts").doc(doc.id);
      return editMyPost.update({
        tittle: "Estoy cambiando el título",
        content: "Estoy cambiando el content"
    
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
      console.error("Error updating document: ", error);
      });
    
    }
    editLi.addEventListener("click", editingMyPosts)

   //DELETING CONTENT
    const deleteLi =document.createElement('button');
    deleteLi.id = 'delete-li';
    deleteLi.textContent= "delete"
    editionMenu.appendChild(deleteLi);
    postContainer.appendChild(editionMenu)

    //Delete a Post
    const db = firebase.firestore();  
    let deleteMyPost = () => {
    db.collection('allPosts').doc(doc.id).delete().then(() => {
    //  profilePostsLi.textContent = "";
    //  postContainer.innerHTML = "";
     profilePostDiv.removeChild(postContainer);
     
     console.log('Document successfully deleted!');
        }).catch((error) => {
        console.error('Error removing document: ', error);
      });
}
    deleteLi.addEventListener("click", deleteMyPost)
    });
});      
    return profilePostDiv; 
};


 
  

