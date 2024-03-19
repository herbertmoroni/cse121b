/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Herbert Moroni",
    photo: "images/moroni.jpg",
    favoriteFoods : ['Bacon','Coxinha','Picanha','Brigadeiro','Beijinho'],
    hobbies: ['FPV Drone Racing','FIFA 2024','Play Sudoku'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Ogden, TU',
        length: '3 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Santos, SP',
        length: '1 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Park City, UT',
        length: '2 years'
    }
);


/* DOM Manipulation - Output */
/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

const photoElement = document.querySelector('#photo');

photoElement.setAttribute('src',myProfile.photo);
photoElement.setAttribute('alt',myProfile.name);

/* Favorite Foods List*/

const favoriteFoodsElement = document.querySelector('#favorite-foods');

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsElement.appendChild(li);
});


/* Hobbies List */

const hobbiesElement = document.querySelector('#hobbies');

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesElement.appendChild(li);
});


/* Places Lived DataList */

const placesLivedElement = document.querySelector('#places-lived');

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    placesLivedElement.appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    placesLivedElement.appendChild(dd);
});

