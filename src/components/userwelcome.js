export const currentUserWelcome = () => {
const user = firebase.auth().currentUser;
    let name;
    let userGreetting;
      if (user != null) {
      name = user.displayName;
      console.log (user);
      userGreetting = document.createElement ("h1");
      userGreetting.id = "user-greeting";
      userGreetting.textContent = ("Bienvenida " + name + " !.");
      
    }
    return userGreetting;
}
