export const aboutUs = () => {
  const whoWeAre = document.createElement('div');
  whoWeAre.id = 'whoWeAre';

  const weAre = document.createElement('main');
  weAre.id = 'we-are';

  const motivation = document.createElement('div');
  motivation.id = 'motivation';
  motivation.textContent = 'Loga Go es nuestra idea para el tercer proyecto en el bootcamp de Laboratoria.  Creamos una app donde las personas que menstrúan pueden encontrarse para compartir sentimientos, pensamientos, inquietudes, inspiración, todo lo que pasa en el cuerpo y el alma cuando menstruamos, Loga Go, estamos recién empezando a crearla... ';
  whoWeAre.appendChild(weAre);
  whoWeAre.appendChild(motivation);
  return whoWeAre;
};
