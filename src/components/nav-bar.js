export const navBar = () => {
  // Creating nav container and ul element.
  const navBarDiv = document.createElement('div');
  navBarDiv.id = 'navBarDiv';
  const navBarUl = document.createElement('ul');
  navBarUl.id = 'navBarUl';
  navBarDiv.appendChild(navBarUl);

  // Creating 4 <li> elements whith its respectives <a> as links containers

  const liHome = document.createElement('li');
  liHome.id = 'li-home';
  const aHome = document.createElement('a');
  aHome.id = 'a-home';
  aHome.textContent = 'Home';
  aHome.href = '/home';
  liHome.appendChild(aHome);
  navBarUl.appendChild(liHome);

  const liProfile = document.createElement('li');
  liProfile.id = 'li-profile';
  const aProfile = document.createElement('a');
  aProfile.id = 'a-profile';
  aProfile.textContent = 'Profile';
  aProfile.href = '/profile';
  liProfile.appendChild(aProfile);
  navBarUl.appendChild(liProfile);

  const liAddPost = document.createElement('li');
  liAddPost.id = 'li-AddPost';
  const aAddPost = document.createElement('a');
  aAddPost.id = 'a-post';
  aAddPost.textContent = 'Add Post';
  aAddPost.href = '/addPost';
  liAddPost.appendChild(aAddPost);
  navBarUl.appendChild(liAddPost);

  const liSingOut = document.createElement('li');
  liSingOut.id = 'li-singOut';
  const aSingOut = document.createElement('a');
  aSingOut.id = 'a-signOut';
  aSingOut.textContent = 'Signout';
  liSingOut.appendChild(aSingOut);
  navBarUl.appendChild(liSingOut);
  // Out firebase
  aSingOut.addEventListener('click', (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign Out succesful
        aSingOut.href = '/login';
      })
      .catch((error) => {
        // an error happended
      });
  });

  return navBarDiv;
};
