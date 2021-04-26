// import { isLiked, likesFun } from './likes.js';
import { isLiked, likesFun } from './likes.js';
import { onePost } from './one-post.js';

// All Posts function, returns html element div with all posts
export const allPosts = () => {
  const allPostDiv = document.createElement('div');
  allPostDiv.id = 'allPosts-div';
  // Initialize firebase firestore
  const db = firebase.firestore();
  // Get all documents in a collection https://firebase.google.com/docs/firestore/query-data/get-data
  db.collection('allPosts').get().then((querySnapshot) => {
    // console.log(querySnapshot);
    // For each post create a html element (li, div and button)
    querySnapshot.forEach((doc) => {
      // Create a button
      const likeButtonEl = document.createElement('button');
      likeButtonEl.id = 'like-button';
      // Post that Im going to update
      const postToUpdate = db.collection('allPosts').doc(doc.id);
      const alreadyLiked = isLiked(doc.data());
      likeButtonEl.addEventListener('click', likesFun(postToUpdate, alreadyLiked));
      // Post container
      const allPostContainer = document.createElement('div');
      allPostContainer.id = 'allpost-container';
      // const posts = doc.data();
      const onePostEl = onePost(doc.data(), doc.id, true);
      allPostContainer.appendChild(onePostEl);
      allPostContainer.appendChild(likeButtonEl);
      allPostDiv.appendChild(allPostContainer);
      console.log(doc.id, ' => ', doc.data());
    });
  });

  // Return  div with all post
  return allPostDiv;
};
