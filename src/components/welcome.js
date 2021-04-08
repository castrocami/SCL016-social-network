export const welcome = () => {
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = 'Hola Amiga';
  welcomeMessage.id = 'welcome-message';
  return welcomeMessage;
}