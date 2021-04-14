export const signOutFunction = () => {
  const aSingOut = document.createElement('a');
  aSingOut.id = 'a-signOut';
  aSingOut.textContent = 'Signout';
  // Out firebase
  aSingOut.addEventListener('click', () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign Out succesful
        aSingOut.href = '/login';
      })
      .catch(() => {
        // an error happended
      });
  });
  return aSingOut;
};
