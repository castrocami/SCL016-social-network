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
      const onePostEl = onePost(doc.data(), doc.id, true);
      onePostEl.classList.add('allpost-container');
      allPostDiv.appendChild(onePostEl);
      console.log(doc.id, ' => ', doc.data());
    });
  });
  // Return  div with all post
  return allPostDiv;
};
