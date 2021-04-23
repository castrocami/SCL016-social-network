export const footer = () => {
  const footerDiv = document.createElement('div');
  footerDiv.id = 'footer-div';
  const footerLi = document.createElement('li');
  footerLi.id = 'footer-li';

  const footerA = document.createElement('a');
  footerA.id = 'footer-a';
  footerA.textContent = 'About us';
  footerA.href = '/aboutUs';
  footerLi.appendChild(footerA);
  footerDiv.appendChild(footerLi);

  const privacy = document.createElement('li');
  privacy.id = 'privacy';
  privacy.textContent = 'Privacy';
  footerDiv.appendChild(privacy);

  return footerDiv;
};
