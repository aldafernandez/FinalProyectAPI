import { useState } from 'react';
import './Searcher.css';

export function Searcher( {sendMovie}) {
    
    const [movie, setMovie] = useState("");

    let checkMovie = () => { if (movie != "") { sendMovie(movie); } }

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
                <a onClick={ () => checkMovie() } className='button'>Buscar</a>
            </div>
           
        </div>
    );
}