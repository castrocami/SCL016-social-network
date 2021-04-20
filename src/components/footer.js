export const footer = () => {
  const footerDiv = document.createElement('div');
  footerDiv.id = 'footer-div';
  const footerLi = document.createElement('li');
  footerLi.id = 'footer-li';
  footerLi.textContent = 'About us';

  const footerA = document.createElement('a');
  footerA.id = 'footeer-a';
  footerA.href = '/AboutUs';
  footerLi.appendChild(footerA);
  footerDiv.appendChild(footerLi);

  const privacy = document.createElement('li');
  privacy.id = 'privacy';
  privacy.textContent = 'Privacy';
  footerDiv.appendChild(privacy);

  return footerDiv;
};
