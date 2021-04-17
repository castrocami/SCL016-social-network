import { getCurrentUser } from '../data/currentUser.js';

// Function "is the post liked?"
export const isLiked = (post) => {
  for (let i = 0; i < post.likes.length; i += 1) {
    if (post.likes[i] === getCurrentUser().email) {
      // Ya tenia like
      return true;
    }
  }
  return false;
};
// All Posts function, returns html element div with all posts
export const allPosts = () => {
  const allPostDiv = document.createElement('div');
  allPostDiv.id = 'allPosts-div';
  // Initialize firebase firestore
  const db = firebase.firestore();
  // Get all documents in a collection https://firebase.google.com/docs/firestore/query-data/get-data
  db.collection('allPosts').get().then((querySnapshot) => {
    console.log(querySnapshot);
    // For each post create a html element (li, div and button)
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      const allPostsLi = document.createElement('li');
      const homePostsContainer = `<div>${posts.tittle}</div><div>${posts.content}</div>`;
      allPostsLi.innerHTML += homePostsContainer;
      allPostDiv.appendChild(allPostsLi);
      // Create a button
      const likeButtonEl = document.createElement('button');
      likeButtonEl.textContent = '<3';
      // Set likes and variable with function "isLiked?"
      const setLikes = db.collection('allPosts').doc(doc.id);
      let alreadyLiked = isLiked(doc.data());
      // Set listener
      likeButtonEl.addEventListener('click', () => {
        console.log('clicked', doc.data());
        // Conditional if is liked or not send information to firestore https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0#update_elements_in_an_array
        if (alreadyLiked) {
          setLikes.update({
            likes: firebase.firestore.FieldValue.arrayRemove(getCurrentUser().email),
          });
          console.log('Unlike :(');
          alreadyLiked = false;
        } else {
          // Atomically remove a region from the "regions" array field.
          setLikes.update({
            likes: firebase.firestore.FieldValue.arrayUnion(getCurrentUser().email),
          });
          console.log('like :)');
          alreadyLiked = true;
        }
      });
      allPostsLi.appendChild(likeButtonEl);
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  });

  // Return  div with all post
  return allPostDiv;
};
