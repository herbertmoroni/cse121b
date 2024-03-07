/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Moroni";
let currentYear = 2024;
let profilePicture = 'images/moroni.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName('img')[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Bacon','Coxinha','Picanha','Brigadeiro','Beijinho'];

foodElement.innerHTML = favoriteFoods;

let anotherFavoriteFood = 'Pasta';

favoriteFoods.push(anotherFavoriteFood);

favoriteFoods.forEach((food, index) => {
    foodElement.innerHTML += `<br>${food}`;
  });

favoriteFoods.shift();

favoriteFoods.forEach((food, index) => {
  foodElement.innerHTML += `<br>${food}`;
});

favoriteFoods.pop();

favoriteFoods.forEach((food, index) => {
  foodElement.innerHTML += `<br>${food}`;
});