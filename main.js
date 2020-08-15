const jokeEl = document.getElementById('joke');
const getJoke = document.getElementById('getJoke');

async function generateJoke () {

    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept' : 'application/json'
        }
    });

    const joke = await jokeRes.json();

    jokeEl.textContent = joke.joke;
}

generateJoke();

getJoke.addEventListener('click', generateJoke);


