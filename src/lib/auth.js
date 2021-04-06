import "firebase/firebaseui";
export const formUi = () => {
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#login-form", {
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        // Other config options...
    });
};