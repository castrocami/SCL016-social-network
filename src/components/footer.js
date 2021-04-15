export const footer = () => {
  const footerDiv = document.createElement('div');
  footerDiv.id = 'footer-div';
  const footerLi = document.createElement('li');
  footerLi.id = 'footer-li';
  const footerA = document.createElement('a');
  footerA.id = 'footeer-a';
  footerLi.appendChild(footerA);
  footerDiv.appendChild(footerLi);
  return footerDiv;
};
