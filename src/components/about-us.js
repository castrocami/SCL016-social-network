export const aboutUs = () => {
  const whoWeAre = document.createElement('div');
  whoWeAre.id = 'whoWeAre';

  const weAre = document.createElement('main');
  weAre.id = 'we-are';

  const motivation = document.createElement('div');
  motivation.id = 'motivation';
  whoWeAre.appendChild(weAre);
  whoWeAre.appendChild(motivation);
  return whoWeAre;
};
