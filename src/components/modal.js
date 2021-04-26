export const editModal = (docData, docId) => {
  console.log('me estoy haciendo click');
  const db = firebase.firestore();
  const modalEditContent = document.createElement('div');
  modalEditContent.id = 'modal-edit-content';

  const spanCloseModal = document.createElement('span');
  spanCloseModal.id = 'span-close-modal';
  spanCloseModal.textContent = 'X';
  spanCloseModal.addEventListener('click', () => {
    modalEditContent.style.display = 'none';
  });

  const pEditTitle = document.createElement('p');
  pEditTitle.id = 'p-edit-title';
  pEditTitle.textContent = 'Titulo';

  const titleEdition = document.createElement('textarea');
  titleEdition.id = 'title-edit';
  titleEdition.textContent = docData.tittle;

  const pEditContent = document.createElement('p');
  pEditContent.id = 'p-edit-content';
  pEditContent.textContent = 'Contenido';

  const contentEdition = document.createElement('textarea');
  contentEdition.id = 'edit-content';
  contentEdition.textContent = docData.content;
  const editingMyPosts = () => {
    const editMyPost = db.collection('allPosts').doc(docId);
    return editMyPost.update({
      tittle: titleEdition.value,
      content: contentEdition.value,
    })
      .then(() => {
        console.log('Document successfully updated!');
        modalEditContent.style.display = 'none';
      })
      .catch((error) => {
      // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };
  const buttonSubmitEdition = document.createElement('button');
  buttonSubmitEdition.id = 'button-submit-edittion';
  buttonSubmitEdition.textContent = 'Guardar';
  buttonSubmitEdition.addEventListener('click', editingMyPosts);

  modalEditContent.appendChild(buttonSubmitEdition);
  modalEditContent.appendChild(spanCloseModal);
  modalEditContent.appendChild(pEditTitle);
  modalEditContent.appendChild(titleEdition);
  modalEditContent.appendChild(pEditContent);
  modalEditContent.appendChild(contentEdition);

  modalEditContent.display = 'initial';
  return modalEditContent;
};
