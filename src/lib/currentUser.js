// Set and get current user
let currentUser;

export const getCurrentUser = () => currentUser;

export const setCurrentUser = (user) => {
  currentUser = user;
};
