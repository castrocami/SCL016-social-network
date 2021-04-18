
// export const editOptions = () => {
//   // const editionContainer= document.createElement('div');
//   // editionContainer.id = 'edition-container';
 
//   const editionMenu= document.createElement('ul');
//   editionMenu.id = 'edition-menu';
//   // profilePosts-div.appendChild(editionMenu)

//   const editLi= document.createElement('li');
//   editLi.id = 'edit-li';
//   editionMenu.appendChild(editLi);

//   const deleteLi =document.createElement('li');
//   deleteLi.id = 'delete-li';
//   editionMenu.appendChild(deleteLi);
  
  

//   return editionMenu; 
// }

//deleting a post https://firebase.google.com/docs/firestore/manage-data/delete-data?authuser=0
// db.collection("allPosts").doc("id").delete().then(() => {
// console.log("Document successfully deleted!");
// }).catch((error) => {
//   console.error("Error removing document: ", error);
// });

//   const deletePost = deleteLi.addEventListener ("click", (e) => {
//   e.preventDefault();
//   const deleting = db.collection("allPosts").doc(id).delete().then(() => {
//     // tittle.value = "";
//     // content.value = "";
//     console.log("Document successfully deleted!");
//   }).catch((error) => {
//     console.error("Error removing document: ", error);
//   });


// //editing a post https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419
//  //Para actualizar algunos campos de un documento sin reemplazarlo por completo, usa el método update()
 
//  let edit = (id) => {
//   const editPosts = db.collection("allPosts").doc("id");
//   return editPosts.update({
 
// })
// .then(() => {
//     console.log("Document successfully updated!");
// })
// .catch((error) => {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// });
 
//  }
 






  