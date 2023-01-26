import { useEffect, useState } from 'react';
import FilmCard from './FilmCard'
import FilmInput from './FilmInput'



export default function FetchFilm() {
    const [film, setFilm] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://www.omdbapi.com/?apikey=a2b07930&s=" + name);
            let data = await response.json();
            setFilm(data);
        }
        fetchData();
    }, [name]);
    return <div>
        <FilmInput name={name} setName={setName} />
        <FilmCard data={film} />
    </div>
}