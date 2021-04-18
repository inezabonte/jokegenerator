import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/getjoke.module.css'

export default function GetJokes() {
    useEffect(() => {
        generateJoke()
    }, [])
    const [joke, setJoke] = useState('')

    const generateJoke = () => {
        return axios.get('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => setJoke(res.data.joke) )
    }
    return (
        <div>
            <p className={styles.joke}>{joke}</p>
            <button className={styles.btn} onClick={generateJoke}>Make Me Laugh</button>
        </div>
    )
}
