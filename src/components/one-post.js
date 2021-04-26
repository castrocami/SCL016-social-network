export const onePost = (docData, docId) => {
  // Initialize firebase firestore
  const db = firebase.firestore();
  const allPostsLi = document.createElement('li');
  allPostsLi.id = 'allPosts-li';
  const homePostsContainer = `<div id= "title-post-${docId}">${docData.tittle}</div>
  <div id= "content-post-${docId}">${docData.content}</div>`;
  allPostsLi.innerHTML += homePostsContainer;
  // Changes https://firebase.google.com/docs/firestore/query-data/listen
  db.collection('allPosts').doc(docId)
    .onSnapshot((newPost) => {
      // console.log(`fue actualizado ${docId}`, newPost.data());
      const changedTittle = document.getElementById(`title-post-${docId}`);
      const changedContent = document.getElementById(`content-post-${docId}`);
      changedTittle.textContent = newPost.data().tittle;
      changedContent.textContent = newPost.data().content;
    });
  return allPostsLi;
};
