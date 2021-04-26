export const currentUserWelcome = () => {
  const user = firebase.auth().currentUser;
  let name;
  let userGreetting;
  let helloMessage;
  const greettingContainer = document.createElement('div');
  greettingContainer.id = 'user-greeting';
  if (user != null) {
    name = user.displayName;
    userGreetting = document.createElement('p');
    helloMessage = document.createElement('p');
    userGreetting.id = 'user-greeting';
    userGreetting.textContent = name;
    helloMessage.textContent = '¡Bienvenida!';
  }
  greettingContainer.appendChild(userGreetting);
  greettingContainer.appendChild(helloMessage);
  return greettingContainer;
};
