export const allPosts = () => {
  const allPostDiv = document.createElement('div');
  allPostDiv.id = 'allPosts-div';
  let allPostshtml = '';

  // Initialize firebase firestore
  const db = firebase.firestore();
  // Get all documents in a collection https://firebase.google.com/docs/firestore/query-data/get-data
  db.collection('allPosts').get().then((querySnapshot) => {
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      const homePostsContainer = ` <li><div>${posts.tittle}</div><div>${posts.content}</div></li>`;
      allPostshtml += homePostsContainer;
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
    allPostDiv.innerHTML = allPostshtml;
  });
  // Return  div with all post
  return allPostDiv;
};
