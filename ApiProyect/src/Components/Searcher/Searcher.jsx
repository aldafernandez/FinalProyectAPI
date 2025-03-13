import { useState } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import './Searcher.css';

export function Searcher( {sendMovie}) {
    
    const [movie, setMovie] = useState("");

    let checkMovie = () => { if (movie != "") { sendMovie(movie); } }

    const [mode, setMode] = useState(false);

    return(
        <div className='searcher'>
            <h1 className='font-honk'>Moblix</h1>
            <div className='search-sector'>
                <input
                    type='text'
                    className='input'
                    placeholder='Ingrese el título de la película'
                    onChange={ (e) => setMovie(e.target.value)}
                />
                <a onClick={ () => checkMovie() } className='btn'>Buscar</a>
            </div>
            <a onClick={ () => setMode(!mode)} className='btn-mode'> 
                { mode ? <span className='ligth'><FaSun /></span> : <span className='dark'><FaMoon /></span> }
            </a>
        </div>
    );
}

32:32