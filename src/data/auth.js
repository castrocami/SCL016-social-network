export const initForm = () => {
// Initialize the FirebaseUI Widget using Firebase.
  const firebaseui = window.firebaseui;
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#login-form', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/home',
  });
};
