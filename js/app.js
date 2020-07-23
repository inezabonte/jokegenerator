'use strict';

var jokeEl = document.getElementById('joke');
var getJoke = document.getElementById('getJoke');

getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {

    var jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    var joke = await jokeRes.json();

    jokeEl.innerHTML = joke.joke;
}