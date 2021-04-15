

export const editOptions = () => {
  const editionContainer= document.createElement('div');
  editionContainer.id = 'edition-container';
 

  const editionMenu= document.createElement('ul');
  editionMenu.id = 'edition-menu';
  editionContainer.appendChild(editionMenu)

  const editLi= document.createElement('li');
  editLi.id = 'edit-li';
  const editA= document.createElement('a');
  editA.id = 'edit-a';
  editLi.appendChild(editA);
  editionMenu.appendChild(editLi);

  const deleteLi =document.createElement('li');
  deleteLi.id = 'delete-li';
  const deleteA= document.createElement('a');
  deleteA.id = 'delete-a';
  deleteLi.appendChild(deleteA);
  editionMenu.appendChild(deleteLi);

  return editionContainer;
  
}
//deleting a post https://firebase.google.com/docs/firestore/manage-data/delete-data?authuser=0

// const deletePost = deleteA.addEventListener ("click", (e) => {
//   e.preventDefault();
//   const deleting = db.collection("allPosts").doc(id).delete().then(() => {
//     console.log("Document successfully deleted!");
//   }).catch((error) => {
//     console.error("Error removing document: ", error);
//   });

// });
  
  
  
  



  