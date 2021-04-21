import { footer } from './footer.js';
// import {home}from "../views.js";
export const aboutUs = () => {
  const woWeAre = document.createElement('div');
  woWeAre.id = 'woWeAre';

  const weAre = document.createElement('main');
  weAre.id = 'we-are';
  weAre.innerText = "hello"

  const weOne = document.createElement('div');
  weOne.Id = 'one';
  weOne.innerText = "hello"
  

  const weTwo = document.createElement('div');
  weTwo.Id = 'two';
  weTwo.innerText = "hello"

  const weThree = document.createElement('div');
  weThree.Id = 'three';
  weThree.innerText = "hello"

 
  weAre.appendChild(weOne);
  weAre.appendChild(weTwo);
  weAre.appendChild(weThree);
  woWeAre.appendChild(weAre);

  
  return woWeAre;
};
