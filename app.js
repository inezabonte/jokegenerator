const jokeEl = document.getElementById('joke')
const getJoke = document.getElementById('getJoke')

getJoke.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke () {

    const jokeRes = await fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single', {
        headers: {
            'Accept' : 'application/json'
        }
    })

    const joke = await jokeRes.json()

    jokeEl.innerHTML = joke.joke;
}

