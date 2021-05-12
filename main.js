'use strict';

const button = document.querySelector ('.js-button');
const inputElement = document.querySelector ('.js-inputnumber');
const msj = document.querySelector('.js-msj');
const aleatorio = getRandomNumber (100);
console.log(aleatorio);

function handleClickButton (ev) {
ev.preventDefault ();
if (inputElement.value > aleatorio) {
msj.value = "Demasiado alto";

} else if (inputElement.value < aleatorio) {
const msj = document.querySelector('.js-msj');
msj.value = "Demasiado bajo";

} else if (inputElement.value === aleatorio) {
    const msj = document.querySelector('.js-msj');
    msj.value = "Has ganado campeona!!!";
}
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

button.addEventListener ('click', handleClickButton);

