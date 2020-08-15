if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('service worker registered', reg))
      .catch((err) => console.log('service worker not registered', err));
  }

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



