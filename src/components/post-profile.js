import { getCurrentUser } from '../data/currentUser.js';
import { editModal } from './modal.js';
import { onePost } from './one-post.js';

export const postProfile = () => {
  const profilePostDiv = document.createElement('div');
  profilePostDiv.id = 'profilePosts-div';
  const db = firebase.firestore();
  const userProfile = getCurrentUser().email;

  db.collection('allPosts').where('user', '==', userProfile).get().then((querySnapshot) => {
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const profilePosts = doc.data();
      console.log(profilePosts);

      // Post container
      const postContainer = document.createElement('div');
      postContainer.id = 'post-container';
      const onePostElProfile = onePost(profilePosts, doc.id, false);
      postContainer.appendChild(onePostElProfile);
      profilePostDiv.appendChild(postContainer);
      // console.log(doc.id, '=>', doc.data());

      // Edit a post https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419
      const editionMenu = document.createElement('ul');
      editionMenu.id = 'edition-menu';
      const editLi = document.createElement('li');
      editLi.id = 'edit-li';
      editionMenu.appendChild(editLi);
      const modalEditContent = editModal(profilePosts, doc.id);
      editLi.addEventListener('click', () => {
        profilePostDiv.appendChild(modalEditContent);
      });

      // Delete a Post
      const deleteLi = document.createElement('li');
      deleteLi.id = 'delete-li';
      editionMenu.appendChild(deleteLi);
      postContainer.appendChild(editionMenu);
      const deleteMyPost = () => {
        db.collection('allPosts').doc(doc.id).delete().then(() => {
          profilePostDiv.removeChild(postContainer);
          console.log('Document successfully deleted!');
        })
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      };
      deleteLi.addEventListener('click', deleteMyPost);
    });
  });
  return profilePostDiv;
};
