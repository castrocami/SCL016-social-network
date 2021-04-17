import { footer } from '../components/footer.js';
// import {home}from "../views.js/"
export const aboutUs = () => {
  const woWeAre = document.createElement('div');
  woWeAre.id = 'woWeAre';

  woWeAre.appendChild(footer());
   
  return woWeAre;
};
