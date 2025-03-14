import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CardMovie.css';

export function CardMovie({movie}) {

    const [data, setData] = useState([]); 

    const API_KEY = "488037bb";

    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`;

    const API_POSTER = "https://img.omdbapi.com/?apikey=488037bb";

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let info = await response.json();
        
        if (info.Search) {
            setData(info.Search);
        }
    }

    useEffect(() => {  if (movie) { CallAPI(); } }, [movie]);

    return (
        < >
            { movie && data.length > 0 && 
                <div className='grid-4'>
                    {data.map((pelicula) => (
                        <div key={pelicula.imdbID} className='card flex center-center column gap-1'>
                            <div>
                                <img className='img-movie' src={API_POSTER + "&i=" + pelicula.imdbID} alt='404 Imagen no disponible' />
                            </div>
                            <div className='flex column center-center gap-1'>
                                <h3>{pelicula.Title}</h3>
                                <Link to={'/movie/'+ pelicula.imdbID } className='btn w-80'>+ Info</Link>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    );
}