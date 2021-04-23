export const aboutUs = () => {
  const whoWeAre = document.createElement('div');
  whoWeAre.id = 'whoWeAre';

  const weAre = document.createElement('main');
  weAre.id = 'we-are';
  

  const weOne = document.createElement('box');
  weOne.id = "we-one";
 
  const weTwo = document.createElement('box');
  weTwo.id = "we-two";
 

  const weThree = document.createElement('box');
  weThree.id = "we-three";


  weAre.appendChild(weOne);
  weAre.appendChild(weTwo);
  weAre.appendChild(weThree);
  whoWeAre.appendChild(weAre)
 
  return whoWeAre;
};
