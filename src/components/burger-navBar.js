export const burgerNavBar = () => {
  const burgerNavBarEl = document.createElement('div');
  burgerNavBarEl.id = 'burger';
  const divBurger1 = document.createElement('div');
  const divBurger2 = document.createElement('div');
  const divBurger3 = document.createElement('div');

  burgerNavBarEl.appendChild(divBurger1);
  burgerNavBarEl.appendChild(divBurger2);
  burgerNavBarEl.appendChild(divBurger3);

  return burgerNavBarEl;
};
