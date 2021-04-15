import { getCurrentUser } from '../data/currentUser.js';

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
export const formNewPost = () => {
  // Creating html elements (Form)
  const newPostEl = document.createElement('form');
  newPostEl.id = 'new-post';
  const tittleInput = document.createElement('textarea');
  tittleInput.id = 'tittle-input';
  const textInput = document.createElement('textarea');
  textInput.id = 'text-input';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.id = 'button-submit';
  // const textButton = 'Submit';
  // textButton.id = 'textButton-submit';
  buttonSubmit.textContent = 'Submit';
  buttonSubmit.type = 'submit';

  // Sending information to Firebase
  buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const postForm = {
      tittle: tittleInput.value,
      content: textInput.value,
      user: getCurrentUser().email,
      likes: [],
    };
    console.log(postForm);

    if (postForm.tittle === '' && postForm.content === '') {
      alert('Por favor ingrese texto');
    } else {
      // Add a new document with a generated id.
      db.collection('allPosts').add(
        postForm,
      )
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
      newPostEl.reset();
    }
  });
  newPostEl.appendChild(tittleInput);
  newPostEl.appendChild(textInput);
  newPostEl.appendChild(buttonSubmit);

  return newPostEl;
};
